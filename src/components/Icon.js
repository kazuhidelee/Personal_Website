import "./Icon.css";

function Icon({src, alt}){
	return(<img src={src} className="icon" alt={alt}/>);
}

export default Icon;