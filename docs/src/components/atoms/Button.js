export default function Button({
  type = "button",
  className = "",
  children,
  ...props
}) {
  const btn = document.createElement("button");
  btn.type = type;
  btn.className = `calc-btn ${className}`.trim();
  btn.textContent = children;
  Object.entries(props).forEach(([key, value]) => {
    btn[key] = value;
  });
  return btn;
}
