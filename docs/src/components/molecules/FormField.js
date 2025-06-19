import Input from "../atoms/Input.js";

export default function FormField({
  id,
  label,
  type = "text",
  placeholder = "",
  value = "",
  className = "",
  ...props
}) {
  const group = document.createElement("div");
  group.className = "input-group";

  const labelEl = document.createElement("label");
  labelEl.htmlFor = id;
  labelEl.textContent = label;

  const input = Input({ id, type, placeholder, value, className, ...props });

  group.appendChild(labelEl);
  group.appendChild(input);
  return group;
}
