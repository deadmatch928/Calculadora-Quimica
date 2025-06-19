import FormField from "../molecules/FormField.js";

export default function MolaridadTemplate() {
  const form = document.createElement("form");
  form.id = "form-molaridad";
  form.className = "calculator-form";

  // Crear los tres campos
  const molesField = FormField({
    id: "moles",
    label: "Moles de soluto:",
    type: "number",
    placeholder: "Ingrese moles",
    autoComplete: "off",
    step: "any",
  });
  const litrosField = FormField({
    id: "litros",
    label: "Litros de solución:",
    type: "number",
    placeholder: "Ingrese litros",
    autoComplete: "off",
    step: "any",
  });
  const molaridadField = FormField({
    id: "resultadoMolaridad",
    label: "Molaridad (M):",
    type: "number",
    placeholder: "Resultado M",
    autoComplete: "off",
    step: "any",
  });

  form.append(molesField, litrosField, molaridadField);

  // Referencias a los inputs
  const inputMoles = molesField.querySelector("input");
  const inputLitros = litrosField.querySelector("input");
  const inputMolaridad = molaridadField.querySelector("input");

  const inputs = [inputMoles, inputLitros, inputMolaridad];
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

      if (computedField === inputMolaridad) {
        // Falta molaridad
        const mol = parseFloat(inputMoles.value);
        const lit = parseFloat(inputLitros.value);
        res = (mol / lit).toFixed(4);
      } else if (computedField === inputMoles) {
        // Falta moles
        const lit = parseFloat(inputLitros.value);
        const mol = parseFloat(inputMolaridad.value);
        res = (mol * lit).toFixed(4);
      } else {
        // Falta litros
        const mol = parseFloat(inputMoles.value);
        const molar = parseFloat(inputMolaridad.value);
        res = (mol / molar).toFixed(4);
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
