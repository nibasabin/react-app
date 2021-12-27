import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import '../css/pageDisplaySection.css';
import { HomePage } from "../pages/HomePage";
export const PageDisplaySection = () => {

    const appContext= useContext(AppContext);
    let homePage = appContext.pages.homePage;
    let aboutPage = appContext.pages.aboutPage
    let skillsPage = appContext.pages.skillsPage;
    let educationPage = appContext.pages.educationPage;
    let experiencePage = appContext.pages.experiencePage;
    let contactPage = appContext.pages.contactPage;

return (
    <div className='pageDisplayContainer'>
        <div className='pageDisplay'>
            {
                homePage && <HomePage/>
            }
                        {
                aboutPage && <div className ='aboutPage'><span>this is aboutPage </span></div>
            }
                        {
                skillsPage && <div className ='skillsPage'><span>this is skillsPage </span></div>
            }
                        {
                educationPage && <div className ='educationPage'><span>this is educationPage </span></div>
            }
                        {
                experiencePage && <div className='experiencePage'><span>this is experiencePage </span></div>
            }
                        {
                contactPage && <div className='contactPage'><span>this is contactPage </span></div>
            }
            
        </div>
    </div>
)}

    