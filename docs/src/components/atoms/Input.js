export default function Input({
  id,
  type = "text",
  placeholder = "",
  value = "",
  className = "",
  ...props
}) {
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.placeholder = placeholder;
  input.value = value;
  input.className = className;
  Object.entries(props).forEach(([key, value]) => {
    input[key] = value;
  });
  return input;
}
