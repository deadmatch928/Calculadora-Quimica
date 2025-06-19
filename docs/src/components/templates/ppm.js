import FormField from "../molecules/FormField.js";

export default function PPMTemplate() {
  const form = document.createElement("form");
  form.id = "form-ppm";
  form.className = "calculator-form";

  // Crear los tres campos
  const solutoField = FormField({
    id: "masaSolutoPPM",
    label: "Masa del soluto (mg):",
    type: "number",
    placeholder: "Ingrese masa en mg",
    autoComplete: "off",
    step: "any",
  });
  const solucionField = FormField({
    id: "masaSolucionPPM",
    label: "Masa de la solución (kg):",
    type: "number",
    placeholder: "Ingrese masa en kg",
    autoComplete: "off",
    step: "any",
  });
  const ppmField = FormField({
    id: "resultadoPPM",
    label: "ppm:",
    type: "number",
    placeholder: "Resultado ppm",
    autoComplete: "off",
    step: "any",
  });

  form.append(solutoField, solucionField, ppmField);

  // Referencias a los inputs
  const inputSoluto = solutoField.querySelector("input");
  const inputSolucion = solucionField.querySelector("input");
  const inputPPM = ppmField.querySelector("input");

  const inputs = [inputSoluto, inputSolucion, inputPPM];
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

      if (computedField === inputPPM) {
        // Falta ppm
        const sol = parseFloat(inputSoluto.value);
        const soln = parseFloat(inputSolucion.value);
        res = (sol / soln).toFixed(4);
      } else if (computedField === inputSoluto) {
        // Falta masa soluto
        const soln = parseFloat(inputSolucion.value);
        const ppm = parseFloat(inputPPM.value);
        res = (ppm * soln).toFixed(4);
      } else {
        // Falta masa solución
        const sol = parseFloat(inputSoluto.value);
        const ppm = parseFloat(inputPPM.value);
        res = (sol / ppm).toFixed(4);
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
