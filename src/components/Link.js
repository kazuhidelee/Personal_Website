import "./Link.css";
function Link({ref, text}){
	return(<a className="link" href={ref}>{text}</a>);
}
export default Link;