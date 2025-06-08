// Calculator module
const Calculator = {
    init() {
        this.setupDarkMode();
        this.setupCalculator();
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
        const calculadoraContainer = document.getElementById("calculadora-container");
        const botones = document.querySelectorAll(".calc-btn");

        // Initial welcome message
        calculadoraContainer.innerHTML = `
            <h2>Bienvenido a la Calculadora de Concentraciones</h2>
            <p>Seleccione alguna de las opciones del superior, cada una hace diferentes tipos de calculos.</p>
        `;

        // Calculator templates
        const templates = {
            molaridad: `
                <h2>Cálculo de Molaridad</h2>
                <label>Moles de soluto:</label>
                <input type="number" id="moles" placeholder="Ingrese moles" step="any">
                <label>Litros de solución:</label>
                <input type="number" id="litros" placeholder="Ingrese litros" step="any">
                <button onclick="Calculator.calcularMolaridad()">Calcular</button>
                <p id="resultado"></p>
            `,
            normalidad: `
                <h2>Cálculo de Normalidad</h2>
                <label>Equivalentes de soluto:</label>
                <input type="number" id="equivalentes" placeholder="Ingrese equivalentes" step="any">
                <label>Litros de solución:</label>
                <input type="number" id="litrosNormalidad" placeholder="Ingrese litros" step="any">
                <button onclick="Calculator.calcularNormalidad()">Calcular</button>
                <p id="resultado"></p>
            `,
            molalidad: `
                <h2>Cálculo de Molalidad</h2>
                <label>Moles de soluto:</label>
                <input type="number" id="molesMolalidad" placeholder="Ingrese moles" step="any">
                <label>Kilogramos de solvente:</label>
                <input type="number" id="kgSolvente" placeholder="Ingrese kg" step="any">
                <button onclick="Calculator.calcularMolalidad()">Calcular</button>
                <p id="resultado"></p>
            `
        };

        // Add click events to calculator buttons
        botones.forEach(boton => {
            boton.addEventListener("click", function () {
                const tipo = this.getAttribute("data-calculo");
                calculadoraContainer.innerHTML = templates[tipo];
            });
        });
    },

    // Calculation methods
    calcularMolaridad() {
        const moles = parseFloat(document.getElementById("moles").value);
        const litros = parseFloat(document.getElementById("litros").value);
        
        if (this.validarEntrada(moles, litros)) {
            const resultado = (moles / litros).toFixed(4);
            this.mostrarResultado(`Molaridad: ${resultado} M`);
        }
    },

    calcularNormalidad() {
        const equivalentes = parseFloat(document.getElementById("equivalentes").value);
        const litros = parseFloat(document.getElementById("litrosNormalidad").value);
        
        if (this.validarEntrada(equivalentes, litros)) {
            const resultado = (equivalentes / litros).toFixed(4);
            this.mostrarResultado(`Normalidad: ${resultado} N`);
        }
    },

    calcularMolalidad() {
        const moles = parseFloat(document.getElementById("molesMolalidad").value);
        const kg = parseFloat(document.getElementById("kgSolvente").value);
        
        if (this.validarEntrada(moles, kg)) {
            const resultado = (moles / kg).toFixed(4);
            this.mostrarResultado(`Molalidad: ${resultado} m`);
        }
    },

    // Helper methods
    validarEntrada(valor1, valor2) {
        if (isNaN(valor1) || isNaN(valor2) || valor2 <= 0) {
            this.mostrarResultado("Por favor, ingrese valores válidos mayores que cero.");
            return false;
        }
        return true;
    },

    mostrarResultado(mensaje) {
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.innerText = mensaje;
        resultadoElement.style.display = "block";
    }
};

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => Calculator.init()); 