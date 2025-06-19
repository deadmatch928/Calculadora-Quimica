import Button from "../atoms/Button.js";

export default function CalcButtons(options, onClick) {
  const container = document.createElement("div");
  container.className = "botones-container";
  options.forEach((opt) => {
    const btn = Button({
      children: opt.label,
      className: "calc-btn",
      "data-calculo": opt.value,
      onclick: onClick,
    });
    container.appendChild(btn);
  });
  return container;
}
