import "./Label.css"

function Label({ text, color = "#f6f6f6" }) {
	return (<li className="label" style={{ backgroundColor: color }}>{text}</li>);
  
}
  
export default Label;
  