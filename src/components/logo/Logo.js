import "./Logo.css"
import loggo from "../../assets/loggo.png"
export default function Logo(){
  return (
    <div className="Logo">
      <img src={loggo} alt="logo" className="logo" />
      

    </div>
  )
}