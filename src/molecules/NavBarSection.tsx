import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";
import '../css/navBarSection.css';
import profilePic from '../images/nibasabin.jpg';

export const NavBarSection = () => {

    const appContext = useContext(AppContext);
    const handelPageClick = (event: any) => {
        var element_to_scroll_to = document.getElementById(event.target.title);
        element_to_scroll_to?.scrollIntoView({behavior:"smooth"});
    
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