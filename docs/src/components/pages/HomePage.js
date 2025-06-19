import CalcButtons from "../molecules/CalcButtons";
import Calculator from "../organisms/Calculator";

export default function HomePage() {
  const main = document.createElement("main");

  // Opciones de cálculo
  const options = [
    { label: "%m/m", value: "m-m" },
    { label: "%m/v", value: "m-v" },
    { label: "%v/v", value: "v-v" },
    { label: "ppm", value: "ppm" },
    { label: "Molaridad", value: "molaridad" },
    { label: "Normalidad", value: "normalidad" },
    { label: "Fracción Molar", value: "fraccion-molar" },
  ];

  let tipoActual = "m-m";
  const calculatorBox = Calculator({ tipo: tipoActual });

  // Renderizar botones y calculadora
  main.appendChild(
    CalcButtons(options, (e) => {
      const tipo = e.target.getAttribute("data-calculo");
      if (!tipo) return;
      tipoActual = tipo;
      // Limpiar y renderizar la calculadora correspondiente
      main.removeChild(calculatorBox);
      const nuevoCalculator = Calculator({ tipo });
      main.appendChild(nuevoCalculator);
    })
  );
  main.appendChild(calculatorBox);

  return main;
}
