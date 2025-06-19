import { FormField } from "../molecules/FormField.js";
import { CalcButtons } from "../molecules/CalcButtons.js";
import MMTemplate from "../templates/mm";
import MVTemplate from "../templates/mv";

export default function Calculator({ tipo }) {
  const container = document.createElement("div");
  container.className = "calculator-box";
  let form = null;
  switch (tipo) {
    case "m-m":
      form = MMTemplate();
      break;
    case "m-v":
      form = MVTemplate();
      break;
    // Aquí se agregarán más casos para otros cálculos
    default:
      form = MMTemplate();
  }
  if (form) container.appendChild(form);
  return container;
}
