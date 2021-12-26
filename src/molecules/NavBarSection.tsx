import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";
import '../css/navBarSection.css';
import profilePic from '../images/nibasabin.jpg';
import { PageDisplayStateProp } from "../interfaces/PageDisplayStateProp";

export const NavBarSection = () => {

    const appContext = useContext(AppContext);
    const handelPageClick = (event: any) => {
        const pageDisplayState: PageDisplayStateProp = {
            homePage: false,
            aboutPage: false,
            contactPage: false,
            skillsPage: false,
            educationPage: false,
            experiencePage: false
        }




        switch (event.target.title) {
            case 'homePage': {
                pageDisplayState.homePage = true;
                pageDisplayState.aboutPage = false;
                pageDisplayState.contactPage = false;
                pageDisplayState.educationPage = false;
                pageDisplayState.experiencePage = false;
                pageDisplayState.skillsPage = false;
                appContext.setPageDisplayState(pageDisplayState)
                break;
            }
            case 'aboutPage': {
                pageDisplayState.homePage = false;
                pageDisplayState.aboutPage = true;
                pageDisplayState.contactPage = false;
                pageDisplayState.educationPage = false;
                pageDisplayState.experiencePage = false;
                pageDisplayState.skillsPage = false;
                appContext.setPageDisplayState(pageDisplayState)
                break;
            }
            case 'skillsPage': {
                pageDisplayState.homePage = false;
                pageDisplayState.aboutPage = false;
                pageDisplayState.contactPage = false;
                pageDisplayState.educationPage = false;
                pageDisplayState.experiencePage = false;
                pageDisplayState.skillsPage = true;
                appContext.setPageDisplayState(pageDisplayState)
                break;
            }
            case 'educationPage': {
                pageDisplayState.homePage = false;
                pageDisplayState.aboutPage = false;
                pageDisplayState.contactPage = false;
                pageDisplayState.educationPage = true;
                pageDisplayState.experiencePage = false;
                pageDisplayState.skillsPage = false;
                appContext.setPageDisplayState(pageDisplayState)
                break;
            }
            case 'experiencePage': {
                pageDisplayState.homePage = false;
                pageDisplayState.aboutPage = false;
                pageDisplayState.contactPage = false;
                pageDisplayState.educationPage = false;
                pageDisplayState.experiencePage = true;
                pageDisplayState.skillsPage = false;
                appContext.setPageDisplayState(pageDisplayState)
                break;
            }
            default: {
                pageDisplayState.homePage = false;
                pageDisplayState.aboutPage = false;
                pageDisplayState.contactPage = true;
                pageDisplayState.educationPage = false;
                pageDisplayState.experiencePage = false;
                pageDisplayState.skillsPage = false;
                appContext.setPageDisplayState(pageDisplayState)
            }
        }
        console.log("this is the event", event.target.title);

    }
    return (
        <div id='menuBarContainer' className='menuBarContainer'>
            <div className='imageContainer'>
                <div className='imageBlock'>
                    <img src={profilePic} alt='profilePic' className='imageFile'></img>
                </div>
            </div>
            <div className='nameBlock'>
                <span className='name'><label>Sabin Raj Bajracharya</label></span>
                <span className='title'><label>Software Engineer</label></span>
            </div>
            <div className='menuBar'>
                <ul>
                    <li><a href="#home" title='homePage' className={appContext.pages.homePage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>HOME</a></li>
                    <li><a href="#about" title='aboutPage' className={appContext.pages.aboutPage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>ABOUT</a></li>
                    <li><a href="#skills" title='skillsPage' className={appContext.pages.skillsPage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>SKILLS</a></li>
                    <li><a href="#education" title='educationPage' className={appContext.pages.educationPage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>EDUCATION</a></li>
                    <li><a href="#experience" title='experiencePage' className={appContext.pages.experiencePage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>EXPERIENCE</a></li>
                    <li><a href="#contact" title='contactPage' className={appContext.pages.contactPage ? 'active': ''} onClick={(e) => { handelPageClick(e) }}>CONTACT</a></li>
                </ul>

            </div>
        </div>
    )
}