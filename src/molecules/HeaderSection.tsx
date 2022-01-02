import { Button } from "../atom/Button";
import { LogInPage } from "../organisms/LogInPage";
import { SignUpPage } from "../organisms/SignUpPage";
import { useState } from 'react';
import '../css/header.css';
import { SocialMediaBar } from "../atom/SocialMediaBar";
import rootBackground from '../images/background.jpg'
import { ToggleButton } from "../atom/ToggleButton";


export const HeaderSection = () => {
    var displayModeTitle = 'Dark Mode View'
    const [showSignUpForm, setShowSignUpForm] = useState(false)
    const [logInButtonClicked, setLogInButtonClicked] = useState(false)
    const [displayMode, setDisplayMode] = useState('BrightMode');
    function createUser() {
        console.log("signup button clicked", !showSignUpForm)
        setShowSignUpForm(!showSignUpForm)
    }

    function displayLoginPage() {
        console.log("login button clicked")
        setLogInButtonClicked(!setLogInButtonClicked)
    }
    function changeMode() {
        if (displayMode === 'BrightMode') {
            document.body.style.backgroundColor='#2f2f2f';
            displayModeTitle = 'Dark Mode View'
            setDisplayMode('DarkMode')
        } else {
            document.body.style.backgroundColor= '#f3f2ef';
            setDisplayMode('BrightMode')
            displayModeTitle = 'Bright Mode View';
        }

    }
    return (<>
        <div className='headerContainer'>
            <div className='header'>

                <div className="col-6 leftColumn">
                    <SocialMediaBar />
                </div>
                <div className="col-6 rightColumn">
                    <span className="toggleSwitchLabel"><label>Dark Mode</label></span>
                    <ToggleButton className='toggleSwitch' onClick={() => changeMode()} />

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