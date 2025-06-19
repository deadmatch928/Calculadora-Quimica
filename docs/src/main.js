// Make Calculator globally accessible
import MMTemplate from "./components/templates/mm.js";
import MVTemplate from "./components/templates/mv.js";
import VVTemplate from "./components/templates/vv.js";
import PPMTemplate from "./components/templates/ppm.js";
import MolaridadTemplate from "./components/templates/molaridad.js";
import NormalidadTemplate from "./components/templates/normalidad.js";
import FraccionMolarTemplate from "./components/templates/fraccion-molar.js";
window.Calculator = {
  // Manual descriptions
  manualDescriptions: {
    "m-m": {
      title: "%m/m (Porcentaje masa/masa)",
      description:
        "Calcula el porcentaje de masa de soluto en relación a la masa total de la solución.",
      formula: "(masa del soluto / masa de la solución) × 100",
    },
    "m-v": {
      title: "%m/v (Porcentaje masa/volumen)",
      description:
        "Calcula el porcentaje de masa de soluto en relación al volumen de la solución.",
      formula: "(masa del soluto / volumen de la solución) × 100",
    },
    "v-v": {
      title: "%v/v (Porcentaje volumen/volumen)",
      description:
        "Calcula el porcentaje de volumen de soluto en relación al volumen total de la solución.",
      formula: "(volumen del soluto / volumen total) × 100",
    },
    ppm: {
      title: "ppm (Partes por millón)",
      description: "Calcula las partes por millón de soluto en la solución.",
      formula: "(masa del soluto en mg / masa de la solución en kg)",
    },
    molaridad: {
      title: "Molaridad (M)",
      description:
        "Calcula la concentración molar (moles de soluto por litro de solución).",
      formula: "moles de soluto / litros de solución",
    },
    normalidad: {
      title: "Normalidad (N)",
      description:
        "Calcula la concentración normal (equivalentes de soluto por litro de solución).",
      formula: "equivalentes de soluto / litros de solución",
    },
    "fraccion-molar": {
      title: "Fracción Molar (X)",
      description: "Calcula la fracción molar de un componente en la solución.",
      formula: "moles del componente / moles totales de la solución",
    },
  },

  // Historical and contextual information
  historicalInfo: {
    "m-m": {
      title: "Porcentajes (%m/m, %m/v, %v/v)",
      history:
        "El uso de porcentajes en química tiene raíces en el desarrollo temprano de la química analítica, particularmente durante el siglo XIX, en un momento en que los científicos comenzaron a estandarizar cómo expresar las proporciones de los componentes en una mezcla o disolución.",
      importance:
        "Se utilizan en etiquetado de productos, control de calidad, industria alimentaria, medicina, e incluso en productos de limpieza y cosmética.",
      additional:
        "Antes, los químicos usaban términos más cualitativos, lo cual generaba confusión. La incorporación del porcentaje como medida permitió comunicar de forma simple cuánta cantidad de una sustancia está presente respecto al total, algo fundamental para la reproducibilidad de experimentos.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption:
        "Laboratorio moderno donde se realizan mediciones de concentración",
    },
    "m-v": {
      title: "Porcentaje masa/volumen (%m/v)",
      history:
        "Común en química biológica y farmacéutica, expresa gramos de soluto por cada 100 mL de solución.",
      importance:
        "Especialmente útil en preparación de soluciones médicas y farmacéuticas donde se necesita una relación precisa entre masa y volumen.",
      additional:
        "Se usa frecuentemente en la preparación de medicamentos y soluciones intravenosas.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption: "Preparación de soluciones en un laboratorio clínico",
    },
    "v-v": {
      title: "Porcentaje volumen/volumen (%v/v)",
      history:
        "Usado principalmente en mezclas líquidas como soluciones alcohólicas, perfumes o desinfectantes.",
      importance:
        "Esencial en la industria de bebidas alcohólicas, perfumería y productos de limpieza.",
      additional:
        "Por ejemplo, un desinfectante que dice 'alcohol al 70% v/v' está indicando que el 70% del volumen es alcohol puro.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption: "Medición de volúmenes en la industria de bebidas",
    },
    ppm: {
      title: "Partes por millón (ppm)",
      history:
        "El concepto surgió durante la Revolución Industrial, cuando el control de contaminantes y aditivos empezó a tener un impacto directo en la salud y el medio ambiente.",
      importance:
        "Clave en normas ambientales, industria alimentaria y medicina.",
      additional:
        "La OMS establece que el límite seguro de arsénico en agua potable es de 10 ppm.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption: "Análisis de calidad de agua en laboratorio ambiental",
    },
    molaridad: {
      title: "Molaridad (M)",
      history:
        "Su desarrollo teórico está vinculado al químico Wilhelm Ostwald, ganador del Premio Nobel en 1909 por su trabajo en reacciones químicas y disoluciones.",
      importance:
        "La unidad más común para trabajar en laboratorio porque está directamente ligada a la cantidad de sustancia y volumen.",
      additional:
        "Permite comparaciones exactas entre sustancias distintas gracias al concepto de mol (≈6.022 × 10²³ partículas).",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption:
        "Preparación de soluciones molares en laboratorio de investigación",
    },
    normalidad: {
      title: "Normalidad (N)",
      history:
        "Fue una unidad muy usada en el siglo XIX y principios del XX, especialmente gracias al trabajo de Justus von Liebig, un químico alemán que revolucionó el análisis cuantitativo.",
      importance:
        "Aunque hoy la molaridad ha reemplazado en gran parte a la normalidad, esta sigue siendo usada en titulaciones ácido-base y en reacciones de neutralización.",
      additional:
        "Su importancia radica en que considera la reactividad de las sustancias, no solo su cantidad.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption: "Titulación ácido-base en laboratorio analítico",
    },
    "fraccion-molar": {
      title: "Fracción Molar (X)",
      history:
        "Surge de los trabajos de Josiah Willard Gibbs, un físico y químico estadounidense que estableció las bases de la termodinámica química a finales del siglo XIX.",
      importance:
        "Fundamental en la ley de Dalton, estudios de propiedades coligativas y física química.",
      additional:
        "Es muy útil en mezclas de gases y soluciones ideales, donde el volumen o la masa pueden variar, pero las relaciones molares permanecen constantes.",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=500",
      imageCaption: "Análisis de mezclas gaseosas en industria petroquímica",
    },
  },

  // Calculator templates
  templates: {
    "m-m": {
      title: "%m/m",
      form: `
        <form id="form-mm" class="calculator-form">
          <div class="input-group">
            <label>Masa del soluto (g):</label>
            <input type="number" id="masaSoluto" placeholder="Ingrese masa del soluto" step="any">
          </div>
          <div class="input-group">
            <label>Masa de la solución (g):</label>
            <input type="number" id="masaSolucion" placeholder="Ingrese masa total" step="any">
          </div>
          <div class="input-group">
            <label>%m/m:</label>
            <input type="number" id="porcentajeMM" placeholder="Resultado %m/m" step="any">
          </div>
        </form>
      `,
    },
    "m-v": {
      title: "%m/v",
      form: `
        <form id="form-mv" class="calculator-form">
          <div class="input-group">
            <label>Masa del soluto (g):</label>
            <input type="number" id="masaSolutoMV" placeholder="Ingrese masa del soluto" step="any">
          </div>
          <div class="input-group">
            <label>Volumen de la solución (mL):</label>
            <input type="number" id="volumenSolucion" placeholder="Ingrese volumen" step="any">
          </div>
          <div class="input-group">
            <label>%m/v:</label>
            <input type="number" id="porcentajeMV" placeholder="Resultado %m/v" step="any">
          </div>
        </form>
      `,
    },
    "v-v": {
      title: "%v/v",
      form: `
        <form id="form-vv" class="calculator-form">
          <div class="input-group">
            <label>Volumen del soluto (mL):</label>
            <input type="number" id="volumenSoluto" placeholder="Ingrese volumen del soluto" step="any">
          </div>
          <div class="input-group">
            <label>Volumen de la solución (mL):</label>
            <input type="number" id="volumenTotal" placeholder="Ingrese volumen total" step="any">
          </div>
          <button type="submit" class="calculate-btn">Calcular</button>
        </form>
      `,
    },
    ppm: {
      title: "ppm",
      form: `
        <form id="form-ppm" class="calculator-form">
          <div class="input-group">
            <label>Masa del soluto (mg):</label>
            <input type="number" id="masaSolutoPPM" placeholder="Ingrese masa en mg" step="any">
          </div>
          <div class="input-group">
            <label>Masa de la solución (kg):</label>
            <input type="number" id="masaSolucionPPM" placeholder="Ingrese masa en kg" step="any">
          </div>
          <button type="submit" class="calculate-btn">Calcular</button>
        </form>
      `,
    },
    molaridad: {
      title: "Molaridad",
      form: `
        <form id="form-molaridad" class="calculator-form">
          <div class="input-group">
            <label>Moles de soluto:</label>
            <input type="number" id="moles" placeholder="Ingrese moles" step="any">
          </div>
          <div class="input-group">
            <label>Litros de solución:</label>
            <input type="number" id="litros" placeholder="Ingrese litros" step="any">
          </div>
          <button type="submit" class="calculate-btn">Calcular</button>
        </form>
      `,
    },
    normalidad: {
      title: "Normalidad",
      form: `
        <form id="form-normalidad" class="calculator-form">
          <div class="input-group">
            <label>Equivalentes de soluto:</label>
            <input type="number" id="equivalentes" placeholder="Ingrese equivalentes" step="any">
          </div>
          <div class="input-group">
            <label>Litros de solución:</label>
            <input type="number" id="litrosNormalidad" placeholder="Ingrese litros" step="any">
          </div>
          <button type="submit" class="calculate-btn">Calcular</button>
        </form>
      `,
    },
    "fraccion-molar": {
      title: "Fracción Molar",
      form: `
        <form id="form-fraccion-molar" class="calculator-form">
          <div class="input-group">
            <label>Moles del componente:</label>
            <input type="number" id="molesComponente" placeholder="Ingrese moles del componente" step="any">
          </div>
          <div class="input-group">
            <label>Moles totales de la solución:</label>
            <input type="number" id="molesTotales" placeholder="Ingrese moles totales" step="any">
          </div>
          <button type="submit" class="calculate-btn">Calcular</button>
        </form>
      `,
    },
  },

  init() {
    this.setupDarkMode();
    this.setupCalculator();
    this.setupFormHandler();
  },

  setupDarkMode() {
    const switchModo = document.getElementById("modoSwitch");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("modo") === "oscuro") {
      body.classList.add("dark-mode");
      switchModo.checked = true;
    }

    switchModo.addEventListener("change", function () {
      if (this.checked) {
        body.classList.add("dark-mode");
        localStorage.setItem("modo", "oscuro");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("modo", "claro");
      }
    });
  },

  setupCalculator() {
    const calculadoraContainer = document.getElementById(
      "calculadora-container"
    );
    const botones = document.querySelectorAll(".calc-btn");
    const manualContainer = document.querySelector("details > summary");
    const historicalInfo = document.getElementById("historical-info");
    const importanceInfo = document.getElementById("importance-info");
    const additionalInfo = document.getElementById("additional-info-content");

    // Initial welcome message
    calculadoraContainer.innerHTML = `
      <h2>Bienvenido a la Calculadora de Concentraciones</h2>
      <p>Seleccione el tipo de concentración que desea calcular:</p>
    `;

    // Clear initial info
    historicalInfo.innerHTML =
      "<p>Seleccione un tipo de cálculo para ver su información histórica.</p>";
    importanceInfo.innerHTML =
      "<p>Seleccione un tipo de cálculo para ver su importancia y aplicaciones.</p>";
    additionalInfo.innerHTML =
      "<p>Seleccione un tipo de cálculo para ver información adicional.</p>";

    // Add click events to calculator buttons
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const tipo = boton.getAttribute("data-calculo");
        // Si es %m/m, usamos el componente reactivo, si no, el HTML por defecto
        if (tipo === "m-m") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(MMTemplate());
        } else if (tipo === "m-v") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(MVTemplate());
        } else if (tipo === "v-v") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(VVTemplate());
        } else if (tipo === "ppm") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(PPMTemplate());
        } else if (tipo === "molaridad") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(MolaridadTemplate());
        } else if (tipo === "normalidad") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(NormalidadTemplate());
        } else if (tipo === "fraccion-molar") {
          calculadoraContainer.innerHTML = "";
          calculadoraContainer.appendChild(FraccionMolarTemplate());
        } else {
          calculadoraContainer.innerHTML = this.templates[tipo].form;
        }
        manualContainer.textContent = `Manual de uso - ${boton.textContent.trim()}`;
        this.updateManual(tipo);
        // Update historical and contextual information
        const info = this.historicalInfo[tipo];
        if (info) {
          historicalInfo.innerHTML = `
            <div class="info-content">
              <h4>${info.title}</h4>
              <p>${info.history}</p>
            </div>
          `;
          importanceInfo.innerHTML = `
            <div class="info-content">
              <p>${info.importance}</p>
            </div>
          `;
          additionalInfo.innerHTML = `
            <div class="info-content">
              <p>${info.additional}</p>
            </div>
          `;
          if (info.imageUrl) {
            const imageContainer = document.createElement("div");
            imageContainer.className = "image-container";
            const image = document.createElement("img");
            image.src = info.imageUrl;
            image.alt = info.title;
            imageContainer.appendChild(image);
            const caption = document.createElement("p");
            caption.className = "image-caption";
            caption.textContent = info.imageCaption;
            imageContainer.appendChild(caption);
            additionalInfo.appendChild(imageContainer);
          }
        }
      });
    });
  },

  setupFormHandler() {
    const container = document.getElementById("calculadora-container");
    container.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = e.target.id; // "form-mm", "form-mv", etc.
      let method =
        "calcular" +
        id
          .slice(5)
          .replace(/-(.)/g, (_, c) => c.toUpperCase())
          .replace(/^./, (c) => c.toUpperCase());
      if (typeof this[method] === "function") this[method]();
    });
  },

  // Calculation methods
  calcularMM() {
    const masaSoluto = parseFloat(document.getElementById("masaSoluto").value);
    const masaSolucion = parseFloat(
      document.getElementById("masaSolucion").value
    );

    if (this.validarEntrada(masaSoluto, masaSolucion)) {
      const resultado = ((masaSoluto / masaSolucion) * 100).toFixed(2);
      this.mostrarResultado(`Concentración: ${resultado}% m/m`);
    }
  },

  calcularMV() {
    const masaSoluto = parseFloat(
      document.getElementById("masaSolutoMV").value
    );
    const volumenSolucion = parseFloat(
      document.getElementById("volumenSolucion").value
    );

    if (this.validarEntrada(masaSoluto, volumenSolucion)) {
      const resultado = ((masaSoluto / volumenSolucion) * 100).toFixed(2);
      this.mostrarResultado(`Concentración: ${resultado}% m/v`);
    }
  },

  calcularVV() {
    const volumenSoluto = parseFloat(
      document.getElementById("volumenSoluto").value
    );
    const volumenTotal = parseFloat(
      document.getElementById("volumenTotal").value
    );

    if (this.validarEntrada(volumenSoluto, volumenTotal)) {
      const resultado = ((volumenSoluto / volumenTotal) * 100).toFixed(2);
      this.mostrarResultado(`Concentración: ${resultado}% v/v`);
    }
  },

  calcularPPM() {
    const masaSoluto = parseFloat(
      document.getElementById("masaSolutoPPM").value
    );
    const masaSolucion = parseFloat(
      document.getElementById("masaSolucionPPM").value
    );

    if (this.validarEntrada(masaSoluto, masaSolucion)) {
      const resultado = (masaSoluto / masaSolucion).toFixed(2);
      this.mostrarResultado(`Concentración: ${resultado} ppm`);
    }
  },

  calcularMolaridad() {
    const moles = parseFloat(document.getElementById("moles").value);
    const litros = parseFloat(document.getElementById("litros").value);

    if (this.validarEntrada(moles, litros)) {
      const resultado = (moles / litros).toFixed(4);
      this.mostrarResultado(`Molaridad: ${resultado} M`);
    }
  },

  calcularNormalidad() {
    const equivalentes = parseFloat(
      document.getElementById("equivalentes").value
    );
    const litros = parseFloat(
      document.getElementById("litrosNormalidad").value
    );

    if (this.validarEntrada(equivalentes, litros)) {
      const resultado = (equivalentes / litros).toFixed(4);
      this.mostrarResultado(`Normalidad: ${resultado} N`);
    }
  },

  calcularFraccionMolar() {
    const molesComponente = parseFloat(
      document.getElementById("molesComponente").value
    );
    const molesTotales = parseFloat(
      document.getElementById("molesTotales").value
    );

    if (this.validarEntrada(molesComponente, molesTotales)) {
      const resultado = (molesComponente / molesTotales).toFixed(4);
      this.mostrarResultado(`Fracción Molar: ${resultado}`);
    }
  },

  // Helper methods
  validarEntrada(valor1, valor2) {
    if (isNaN(valor1) || isNaN(valor2) || valor2 <= 0) {
      this.mostrarResultado(
        "Por favor, ingrese valores válidos mayores que cero."
      );
      return false;
    }
    return true;
  },

  mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
      // Reset animation by removing and re-adding the element
      resultadoElement.style.display = "none";
      resultadoElement.offsetHeight; // Force reflow
      resultadoElement.style.display = "block";

      resultadoElement.innerHTML = `<p class="resultado-texto">${mensaje}</p>`;
    }
  },

  updateManual(calculationType) {
    const manualDetails = document.querySelector("details");
    const manualContent = manualDetails.querySelector("div");
    const manualInfo = this.manualDescriptions[calculationType];

    if (manualInfo) {
      manualContent.innerHTML = `
        <h3>${manualInfo.title}</h3>
        <p>${manualInfo.description}</p>
        <p><strong>Fórmula:</strong> ${manualInfo.formula}</p>
      `;
    } else {
      manualContent.innerHTML =
        "<p>Seleccione un tipo de cálculo para ver su descripción y fórmula.</p>";
    }
  },
};

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => window.Calculator.init());
