// docs/src/components/templates/mm.js
import FormField from "../molecules/FormField.js";

export default function MMTemplate() {
  const form = document.createElement("form");
  form.id = "form-mm";
  form.className = "calculator-form";

  // Crear los tres campos
  const solutoField = FormField({
    id: "masaSoluto",
    label: "Masa del soluto (g):",
    type: "number",
    placeholder: "Ingrese masa del soluto",
    autoComplete: "off",
    step: "any",
  });
  const solucionField = FormField({
    id: "masaSolucion",
    label: "Masa de la solución (g):",
    type: "number",
    placeholder: "Ingrese masa total",
    autoComplete: "off",
    step: "any",
  });
  const porcentajeField = FormField({
    id: "porcentajeMM",
    label: "%m/m:",
    type: "number",
    placeholder: "Resultado %m/m",
    autoComplete: "off",
    step: "any",
  });

  form.append(solutoField, solucionField, porcentajeField);

  // Referencias a los inputs
  const inputSoluto = solutoField.querySelector("input");
  const inputSolucion = solucionField.querySelector("input");
  const inputPorcentaje = porcentajeField.querySelector("input");

  const inputs = [inputSoluto, inputSolucion, inputPorcentaje];
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
        // Falta %m/m
        const sol = parseFloat(inputSoluto.value);
        const soln = parseFloat(inputSolucion.value);
        res = ((sol / soln) * 100).toFixed(4);
      } else if (computedField === inputSoluto) {
        // Falta masa soluto
        const soln = parseFloat(inputSolucion.value);
        const por = parseFloat(inputPorcentaje.value);
        res = ((por / 100) * soln).toFixed(4);
      } else {
        // Falta masa solución
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
