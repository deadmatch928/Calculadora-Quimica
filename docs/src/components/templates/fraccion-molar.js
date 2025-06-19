import FormField from "../molecules/FormField.js";

export default function FraccionMolarTemplate() {
  const form = document.createElement("form");
  form.id = "form-fraccion-molar";
  form.className = "calculator-form";

  // Crear los tres campos
  const componenteField = FormField({
    id: "molesComponente",
    label: "Moles del componente:",
    type: "number",
    placeholder: "Ingrese moles del componente",
    autoComplete: "off",
    step: "any",
  });
  const totalesField = FormField({
    id: "molesTotales",
    label: "Moles totales de la solución:",
    type: "number",
    placeholder: "Ingrese moles totales",
    autoComplete: "off",
    step: "any",
  });
  const fraccionField = FormField({
    id: "resultadoFraccion",
    label: "Fracción Molar (X):",
    type: "number",
    placeholder: "Resultado X",
    autoComplete: "off",
    step: "any",
  });

  form.append(componenteField, totalesField, fraccionField);

  // Referencias a los inputs
  const inputComponente = componenteField.querySelector("input");
  const inputTotales = totalesField.querySelector("input");
  const inputFraccion = fraccionField.querySelector("input");

  const inputs = [inputComponente, inputTotales, inputFraccion];
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

      if (computedField === inputFraccion) {
        // Falta fracción molar
        const comp = parseFloat(inputComponente.value);
        const tot = parseFloat(inputTotales.value);
        res = (comp / tot).toFixed(4);
      } else if (computedField === inputComponente) {
        // Falta moles del componente
        const tot = parseFloat(inputTotales.value);
        const frac = parseFloat(inputFraccion.value);
        res = (frac * tot).toFixed(4);
      } else {
        // Falta moles totales
        const comp = parseFloat(inputComponente.value);
        const frac = parseFloat(inputFraccion.value);
        res = (comp / frac).toFixed(4);
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
