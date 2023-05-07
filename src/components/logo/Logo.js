import "./Logo.css";
import logo from "../../assets/loggo.png";
export default function Logo() {
  return (
    <div className="Logo">
      <a href="https://youtu.be/IaXjbgH3cZY">
        <img src={logo} alt="logo" className="logo" />
      </a>
    </div>
  );
}
