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
      title: "Porcentaje masa/masa (%m/m)",
      history:
        "En el siglo XIX, la química analítica introdujo los porcentajes para estandarizar las proporciones de los componentes en mezclas. Más tarde, al consolidarse la química cuantitativa en universidades europeas, esta práctica se incorporó a los manuales de laboratorio, facilitando comparaciones precisas en investigaciones industriales y académicas.",
      importance:
        "Se utilizan en etiquetado de productos, control de calidad, industria alimentaria, medicina, e incluso en productos de limpieza y cosmética.",
      additional:
        "Antes, los químicos usaban términos más cualitativos, lo cual generaba confusión. La incorporación del porcentaje como medida permitió comunicar de forma simple cuánta cantidad de una sustancia está presente respecto al total, algo fundamental para la reproducibilidad de experimentos.",
      imageUrl: "docs/src/assets/Fotos-Dimm-67.jpg",
      imageCaption:
        "Laboratorio moderno donde se realizan mediciones de concentración",
      secondImageUrl: "docs/src/assets/laboratorio-masa-1.jpg",
      secondImageCaption: "Medición de porcentajes masa/masa en laboratorio",
    },
    "m-v": {
      title: "Porcentaje masa/volumen (%m/v)",
      history:
        "El porcentaje masa/volumen surgió en los laboratorios farmacéuticos del siglo XIX, cuando fue necesario un método sencillo para dosificar solutos en relación directa al volumen de la solución. Con el desarrollo de la farmacología moderna a principios del XX, su uso se institucionalizó en hospitales y fábricas de medicamentos, garantizando precisión en preparaciones orales e intravenosas.",
      importance:
        "Especialmente útil en preparación de soluciones médicas y farmacéuticas donde se necesita una relación precisa entre masa y volumen.",
      additional:
        "Se usa frecuentemente en la preparación de medicamentos y soluciones intravenosas.",
      imageUrl: "docs/src/assets/maxresdefault.jpg",
      imageCaption: "Preparación de soluciones en un laboratorio clínico",
      secondImageUrl: "docs/src/assets/muestreo.jpg",
      secondImageCaption: "Análisis de concentraciones en muestras de agua",
    },
    "v-v": {
      title: "Porcentaje volumen/volumen (%v/v)",
      history:
        "El porcentaje volumen/volumen nace a finales del siglo XIX en la industria de bebidas alcohólicas y perfumería, cuando los productores requerían un estándar para indicar la pureza de mezclas líquidas. La revolución de la destilación industrial y el auge de la perfumería moderna impulsaron su adopción en controles de calidad, asegurando uniformidad en la concentración de etanol y esencias aromáticas.",
      importance:
        "Esencial en la industria de bebidas alcohólicas, perfumería y productos de limpieza.",
      additional:
        "Por ejemplo, un desinfectante que dice 'alcohol al 70% v/v' está indicando que el 70% del volumen es alcohol puro.",
      imageUrl: "docs/src/assets/250px-Alcoholmeter-_20091205.jpg",
      imageCaption: "Medición de volúmenes en la industria de bebidas",
      secondImageUrl: "docs/src/assets/istockphoto-1466912934-170667a.jpg",
      secondImageCaption: "Control de calidad en industria de bebidas",
    },
    ppm: {
      title: "Partes por millón (ppm)",
      history:
        "El concepto de partes por millón se consolidó durante la Revolución Industrial del siglo XIX ante la creciente necesidad de cuantificar trazas de contaminantes en aire y agua. Este término permitió a químicos y autoridades ambientales establecer límites de seguridad y sentó las bases de las normativas modernas en calidad de agua potable, industria alimentaria y control de emisiones.",
      importance:
        "La importancia de PPM (Partes por Millón) radica en su uso como unidad de medida de concentración, especialmente en situaciones donde se manejan cantidades muy pequeñas de una sustancia en otra. Esto es crucial en diversos campos, como la calidad del aire, el tratamiento de agua, la industria alimentaria y la gestión de proyectos. ",
      additional:
        "La OMS establece que el límite seguro de arsénico en agua potable es de 10 ppm.",
      imageUrl: "docs/src/assets/Proyecto-Agua-IET-investigadores-posando.jpg",
      imageCaption: "Análisis de calidad de agua en laboratorio ambiental",
      secondImageUrl: "docs/src/assets/Analisis-de-arsenico-del-agua.png",
      secondImageCaption:
        "Análisis de calidad de agua en fuentes de agua potable",
    },
    molaridad: {
      title: "Molaridad (M)",
      history:
        "La molaridad se formalizó en el siglo XIX gracias a los estudios de Wilhelm Ostwald y Svante Arrhenius, que vincularon la cantidad de sustancia con su volumen de disolución. Con la adopción del concepto de mol como unidad estándar, la molaridad se convirtió en la referencia central en laboratorios de investigación y enseñanza, facilitando comparaciones exactas entre diferentes soluciones.",
      importance:
        "La unidad más común para trabajar en laboratorio porque está directamente ligada a la cantidad de sustancia y volumen.",
      additional:
        "Permite comparaciones exactas entre sustancias distintas gracias al concepto de mol (≈6.022 × 10²³ partículas).",
      imageUrl: "docs/src/assets/louis-reed-JeInkKlI2Po-unsplash.jpg",
      imageCaption:
        "Preparación de soluciones molares en laboratorio de investigación",
      secondImageUrl: "docs/src/assets/csm_G534_03E_02_63b5d24e75.png",
      secondImageCaption: "Medición de concentraciones molares",
    },
    normalidad: {
      title: "Normalidad (N)",
      history:
        "La normalidad fue introducida a mediados del siglo XIX por Justus von Liebig y sus contemporáneos, quienes buscaban incorporar la reactividad de los solutos en titulaciones ácido-base. Este enfoque revolucionó el análisis cuantitativo, estandarizando procedimientos de neutralización hasta que la molaridad desplazó parcialmente su uso, aunque aún sigue vigente en titulaciones específicas.",
      importance:
        "Aunque hoy la molaridad ha reemplazado en gran parte a la normalidad, esta sigue siendo usada en titulaciones ácido-base y en reacciones de neutralización.",
      additional:
        "Su importancia radica en que considera la reactividad de las sustancias, no solo su cantidad.",
      imageUrl:
        "docs/src/assets/Titulación ácido-base en laboratorio analítico.jpeg",
      imageCaption: "Titulación ácido-base en laboratorio analítico",
      secondImageUrl: "docs/src/assets/Analisis_destacada-770x498.png",
      secondImageCaption: "Análisis de normalidad en laboratorio",
    },
    "fraccion-molar": {
      title: "Fracción Molar (X)",
      history:
        "La fracción molar se originó en los trabajos termodinámicos de Josiah Willard Gibbs a finales del siglo XIX, como parte de los fundamentos de la química estadística. Al expresar las proporciones molares independientemente de masa o volumen, este concepto resultó esencial en el estudio de propiedades coligativas y mezclas de gases, aportando claridad en sistemas ideales.",
      importance:
        "Fundamental en la ley de Dalton para comprender el comportamiento de las mezclas de gases en diversas aplicaciones, desde la respiración hasta la ingeniería química.",
      additional:
        "Es muy útil en mezclas de gases y soluciones ideales, donde el volumen o la masa pueden variar, pero las relaciones molares permanecen constantes.",
      imageUrl: "docs/src/assets/QQ截图20230523154651.jpg",
      imageCaption: "Análisis de mezclas gaseosas en industria petroquímica",
      secondImageUrl:
        "docs/src/assets/Figura-2-Perfiles-de-las-fracciones-molares-de-los-gases-obtenidos-con-el-software-AFS_Q320.jpg",
      secondImageCaption: "Estudio de fracciones molares en gases",
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
            // Primera imagen en el contenedor dinámico
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

            // Segunda imagen en el contenedor fijo
            if (info.secondImageUrl) {
              const topicImage = document.getElementById("topic-image-src");
              const imageCaption = document.getElementById("image-caption");

              topicImage.src = info.secondImageUrl;
              topicImage.alt = info.title;
              imageCaption.textContent = info.secondImageCaption;
            }
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
