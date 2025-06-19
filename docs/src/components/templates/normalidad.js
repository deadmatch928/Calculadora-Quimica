import FormField from "../molecules/FormField.js";

export default function NormalidadTemplate() {
  const form = document.createElement("form");
  form.id = "form-normalidad";
  form.className = "calculator-form";

  // Crear los tres campos
  const equivalentesField = FormField({
    id: "equivalentes",
    label: "Equivalentes de soluto:",
    type: "number",
    placeholder: "Ingrese equivalentes",
    autoComplete: "off",
    step: "any",
  });
  const litrosField = FormField({
    id: "litrosNormalidad",
    label: "Litros de solución:",
    type: "number",
    placeholder: "Ingrese litros",
    autoComplete: "off",
    step: "any",
  });
  const normalidadField = FormField({
    id: "resultadoNormalidad",
    label: "Normalidad (N):",
    type: "number",
    placeholder: "Resultado N",
    autoComplete: "off",
    step: "any",
  });

  form.append(equivalentesField, litrosField, normalidadField);

  // Referencias a los inputs
  const inputEquivalentes = equivalentesField.querySelector("input");
  const inputLitros = litrosField.querySelector("input");
  const inputNormalidad = normalidadField.querySelector("input");

  const inputs = [inputEquivalentes, inputLitros, inputNormalidad];
  const manualInputs = new Set(); // solo inputs que el usuario ha rellenado manualmente
  let timeout,
    lastComputedField = null;

  function calcular() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // 1) Si hay menos de 2 inputs manuales, limpio el cálculo anterior
      if (manualInputs.size < 2) {
        if (lastComputedField) {
          lastComputedField.value = "";
          lastComputedField = null;
        }
        return;
      }

      // 2) Si hay exactamente 2 inputs manuales, calculo el tercero
      const computedField = inputs.find((i) => !manualInputs.has(i));
      let res;

      if (computedField === inputNormalidad) {
        // Falta normalidad
        const eq = parseFloat(inputEquivalentes.value);
        const lit = parseFloat(inputLitros.value);
        res = (eq / lit).toFixed(4);
      } else if (computedField === inputEquivalentes) {
        // Falta equivalentes
        const lit = parseFloat(inputLitros.value);
        const norm = parseFloat(inputNormalidad.value);
        res = (norm * lit).toFixed(4);
      } else {
        // Falta litros
        const eq = parseFloat(inputEquivalentes.value);
        const norm = parseFloat(inputNormalidad.value);
        res = (eq / norm).toFixed(4);
      }

      computedField.value = res;
      lastComputedField = computedField;
    }, 400);
  }

  // Listener: actualizo manualInputs y disparo cálculo
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const v = input.value.trim();
      if (v === "" || isNaN(parseFloat(v))) {
        manualInputs.delete(input);
      } else {
        manualInputs.add(input);
      }
      calcular();
    });
  });

  return form;
}
