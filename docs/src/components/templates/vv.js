import FormField from "../molecules/FormField.js";

export default function VVTemplate() {
  const form = document.createElement("form");
  form.id = "form-vv";
  form.className = "calculator-form";

  // Crear los tres campos
  const solutoField = FormField({
    id: "volumenSoluto",
    label: "Volumen del soluto (mL):",
    type: "number",
    placeholder: "Ingrese volumen del soluto",
    autoComplete: "off",
    step: "any",
  });
  const totalField = FormField({
    id: "volumenTotal",
    label: "Volumen de la solución (mL):",
    type: "number",
    placeholder: "Ingrese volumen total",
    autoComplete: "off",
    step: "any",
  });
  const porcentajeField = FormField({
    id: "porcentajeVV",
    label: "%v/v:",
    type: "number",
    placeholder: "Resultado %v/v",
    autoComplete: "off",
    step: "any",
  });

  form.append(solutoField, totalField, porcentajeField);

  // Referencias a los inputs
  const inputSoluto = solutoField.querySelector("input");
  const inputTotal = totalField.querySelector("input");
  const inputPorcentaje = porcentajeField.querySelector("input");

  const inputs = [inputSoluto, inputTotal, inputPorcentaje];
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
        // Falta %v/v
        const sol = parseFloat(inputSoluto.value);
        const tot = parseFloat(inputTotal.value);
        res = ((sol / tot) * 100).toFixed(4);
      } else if (computedField === inputSoluto) {
        // Falta volumen soluto
        const tot = parseFloat(inputTotal.value);
        const por = parseFloat(inputPorcentaje.value);
        res = ((por / 100) * tot).toFixed(4);
      } else {
        // Falta volumen total
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
