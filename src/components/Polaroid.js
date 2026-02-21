import "./Polaroid.css";

function Polaroid({ src, alt, text, title }) {
  const handleImageError = (e) => {
    console.error('Failed to load image:', src);
    e.target.style.display = 'none';
  };

  return (
    <div className="polaroid">
      <img 
        src={src} 
        alt={alt} 
        className="polaroid-img" 
        onError={handleImageError}
      />
      <div className="title">{title}</div>
      <div className="caption">{text}</div>
    </div>
  );
}

export default Polaroid;
