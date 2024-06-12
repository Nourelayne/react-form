import InscriptionContainer from "../Inscription/Inscription.Container";
import LoginContainer from "../Login/Login.Container";
import { TAuthentication } from "./types";
import "./styles.css";

const Authentication = ({ containerClassName, handleOnClick }: TAuthentication) => (
    <div className="App">
        <div className={containerClassName} id="container">
            <InscriptionContainer />
            <LoginContainer />
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>
                            To keep connected with us please login with your personal info
                        </p>
                        <button
                            className="ghost"
                            id="signIn"
                            onClick={() => handleOnClick("signIn")}
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button
                            className="ghost "
                            id="signUp"
                            onClick={() => handleOnClick("signUp")}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Authentication;
