import React from 'react';
import {useState} from 'react';
import {toast} from "react-toastify";

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);
    const [active, setActive] = useState("login-container");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const registerSubmit = async (e) => {
        e.preventDefault();

        toast.success(`Email is sent to ${registerEmail}. Click the link to complete your registration.`);
        window.localStorage.setItem("emailForRegistration", registerEmail);
        setRegisterEmail("");
    };

    function toggleShowPwd() {
        setShowPwd(!showPwd);
    }

    function toggleActive() {
        setActive((curr) => (curr === "login-container" ? "login-container active" : "login-container"));
    }

    return (
        <div className="login-component">
            <div className={active}>
                <div className="login-forms">
                    <div className="login-form login">
                        <span className="login-title">Login</span>
                        <form action="#">
                            <div className="login-input-field">
                                <input type="email" placeholder="Enter your email" required/>
                                <i className='bx bx-envelope icon'></i>
                            </div>
                            <div className="login-input-field">
                                {showPwd ? <input type="text" placeholder="Enter your password" required/> :
                                    <input type="password" placeholder="Enter your password" required/>}
                                <i className='bx bx-lock-alt icon'></i>
                                {showPwd ? <i className='bx bx-show showHidePwd' onClick={toggleShowPwd}></i> :
                                    <i className='bx bx-hide showHidePwd' onClick={toggleShowPwd}></i>}
                            </div>

                            <div className="login-checkbox-text">
                                <div className="login-checkbox-content">
                                    <input type="checkbox" id="logCheck"/>
                                    <label htmlFor="logCheck" className="login-text">Remember me</label>
                                </div>

                                <a href="#" className="login-text">Forgot password?</a>
                            </div>

                            <div className="login-input-field login-button">
                                <input type="button" value="Login Now"/>
                            </div>
                        </form>

                        <div className="login-signup">
                            <span className="login-text">Don't have an account?
                                <a href="#" className="login-text signup-text" onClick={toggleActive}>Sign up now</a>
                            </span>
                        </div>
                    </div>

                    <div className="login-form signup">
                        <span className="login-title">Register</span>
                        <form onSubmit={registerSubmit}>
                            <div className="login-input-field">
                                <input type="text" placeholder="Enter your name" required/>
                                <i className='bx bx-user icon'></i>
                            </div>
                            <div className="login-input-field">
                                <input type="email" placeholder="Enter your email" value={registerEmail}
                                       onChange={(e) => setRegisterEmail(e.target.value)} required/>
                                <i className='bx bx-envelope icon'></i>
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder="Create your password" required/>
                                <i className='bx bx-lock-alt icon'></i>
                            </div>
                            <div className="login-input-field">
                                {showPwd ? <input type="text" placeholder="Confirm your password" required/> :
                                    <input type="password" placeholder="Confirm your password" required/>}
                                <i className='bx bx-lock-alt icon'></i>
                                {showPwd ? <i className='bx bx-show showHidePwd' onClick={toggleShowPwd}></i> :
                                    <i className='bx bx-hide showHidePwd' onClick={toggleShowPwd}></i>}
                            </div>

                            <div className="login-checkbox-text">
                                <div className="login-checkbox-content">
                                    <input type="checkbox" id="signCheck"/>
                                    <label htmlFor="signCheck" className="login-text">
                                        <a href="#" className="login-text">I accept all term & conditions</a>
                                    </label>
                                </div>
                            </div>

                            <div className="login-input-field login-button">
                                <input type="submit" value="Signup Now"/>
                            </div>
                        </form>

                        <div className="login-signup">
                            <span className="login-text">Already have an account?
                                <a href="#" className="login-text signup-text" onClick={toggleActive}>Login now</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;