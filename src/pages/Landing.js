import "./Landing.css";
import { Link } from "react-router-dom";
import headshot from "../images/headshot.png";
import home from "../images/home.png";
import light from "../images/lightbolb.png";
import coffee from "../images/coffee.png";
import brush from "../images/brush.png";

const navItems = [
  { to: "/profile", icon: home, label: "About" },
  { to: "/projects", icon: light, label: "Projects" },
  { to: "/work", icon: coffee, label: "Work" },
  { to: "/art", icon: brush, label: "Art" },
  { to: "/palette", icon: brush, label: "Palette" },
];

function Landing() {
  return (
    <div className="landing">
      <div className="landing-orbit">
        {navItems.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            className="landing-nav-icon"
            style={{ "--i": i }}
            aria-label={item.label}
          >
            <img src={item.icon} alt={item.label} />
            <span className="landing-nav-label">{item.label}</span>
          </Link>
        ))}
      </div>

      <Link to="/profile" className="landing-hero">
        <img src={headshot} alt="Tony Lee" className="landing-headshot" />
        <span className="landing-cta">Click to view profile</span>
      </Link>

      <div className="landing-title">
        <h1>Tony Lee</h1>
        <p>Welcome to my portfolio</p>
      </div>
    </div>
  );
}

export default Landing;
