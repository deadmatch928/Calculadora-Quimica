import FormField from "../molecules/FormField.js";

export default function MVTemplate() {
  const form = document.createElement("form");
  form.id = "form-mv";
  form.className = "calculator-form";

  // Crear los tres campos
  const solutoField = FormField({
    id: "masaSolutoMV",
    label: "Masa del soluto (g):",
    type: "number",
    placeholder: "Ingrese masa del soluto",
    autoComplete: "off",
    step: "any",
  });
  const volumenField = FormField({
    id: "volumenSolucion",
    label: "Volumen de la solución (mL):",
    type: "number",
    placeholder: "Ingrese volumen",
    autoComplete: "off",
    step: "any",
  });
  const porcentajeField = FormField({
    id: "porcentajeMV",
    label: "%m/v:",
    type: "number",
    placeholder: "Resultado %m/v",
    autoComplete: "off",
    step: "any",
  });

  form.append(solutoField, volumenField, porcentajeField);

  // Referencias a los inputs
  const inputSoluto = solutoField.querySelector("input");
  const inputVolumen = volumenField.querySelector("input");
  const inputPorcentaje = porcentajeField.querySelector("input");

  const inputs = [inputSoluto, inputVolumen, inputPorcentaje];
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

      if (computedField === inputPorcentaje) {
        // Falta %m/v
        const sol = parseFloat(inputSoluto.value);
        const vol = parseFloat(inputVolumen.value);
        res = ((sol / vol) * 100).toFixed(4);
      } else if (computedField === inputSoluto) {
        // Falta masa soluto
        const vol = parseFloat(inputVolumen.value);
        const por = parseFloat(inputPorcentaje.value);
        res = ((por / 100) * vol).toFixed(4);
      } else {
        // Falta volumen solución
        const sol = parseFloat(inputSoluto.value);
        const por = parseFloat(inputPorcentaje.value);
        res = (sol / (por / 100)).toFixed(4);
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
