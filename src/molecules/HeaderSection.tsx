import { Button } from "../atom/Button";
import { LogInPage } from "../organisms/LogInPage";
import { SignUpPage } from "../organisms/SignUpPage";
import { useState } from 'react';
import '../css/header.css';


export const HeaderSection = () => {
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const [logInButtonClicked, setLogInButtonClicked] = useState(false)
    function createUser() {
        console.log("signup button clicked", !showSignUpForm)
        setShowSignUpForm(!showSignUpForm)
    }

    function displayLoginPage() {
        console.log("login button clicked")
        setLogInButtonClicked(!setLogInButtonClicked)
    }

    return (<>
        <div id="header" className="container">
            <div className="row headerRow">
                <div className="col-6 leftColumn"></div>
                <div className="col-6 rightColumn">
                    <Button title="Sign Up" type="button" className="sign-up-button" onClick={() => { createUser() }} />
                    {
                        showSignUpForm && <SignUpPage displayHandler={setShowSignUpForm} />
                    }

                    <Button title="Log In" type="button" className="login-button" onClick={() => { displayLoginPage() }} />
                    {logInButtonClicked && <LogInPage />}
                </div>
            </div>
        </div>
    </>)
}