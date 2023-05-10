import "./Logo.css";
import llogo from "../../assets/loggo.png";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <div className="Logo">
      <Link href="https://youtu.be/IaXjbgH3cZY">
        <img src={llogo} alt="logo" className="logo" />
      </Link>
    </div>
  );
}
