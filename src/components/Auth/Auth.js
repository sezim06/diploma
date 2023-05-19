import { useContext } from "react";
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {user ? (
        <div className="Auth-log-out">
         
          <div>
            <button className="animated-button" onClick={logOut}>
              Sign out
            </button>
          </div>
          <div>
            <img className="photo" src={user.photoURL} alt="email" />{" "}
          </div>
        </div>
      ) : (
        <div className="Auth-log-in">
          <div>Hello guest!</div>
          <div>
            <button className="animated-button" onClick={logIn}>
              Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
