import "./Polaroid.css";

function Polaroid({ src, alt, text, title }) {
  return (
    <div className="polaroid">
      <img src={src} alt={alt} className="polaroid-img" />
      <div className="title">{title}</div>
      <div className="caption">{text}</div>
    </div>
  );
}

export default Polaroid;
