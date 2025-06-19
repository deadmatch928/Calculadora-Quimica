export default function Switch({
  id = "modoSwitch",
  checked = false,
  onChange = null,
}) {
  const label = document.createElement("label");
  label.className = "switch";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = id;
  input.checked = checked;
  if (onChange) input.addEventListener("change", onChange);

  const slider = document.createElement("span");
  slider.className = "slider";

  label.appendChild(input);
  label.appendChild(slider);
  return label;
}
