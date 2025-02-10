import "./Link.css";

function Link({ ref, text, color = "#b4b4b4", bold = false }) {
  return (
    <a
      className="link"
      href={ref}
      style={{ color, fontWeight: bold ? "bold" : "500" }}
    >
      {text}
    </a>
  );
}

export default Link;