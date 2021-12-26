import { NavBarSection } from '../molecules/NavBarSection'
import '../css/bodySection.css'
import { PageDisplaySection } from './PageDisplaySection';

export const BodySection = () => {
    const showNavBarMenu =()=>{
        var x = document.getElementById("menuBarContainer");
        if (x?.className === "menuBarContainer") {
          x.className += " responsive";
        } else {
          
        }
    }
    return (<div className="bodySectionContainer">
        <NavBarSection/>
        <a href="#" className="hiddenIcon" onClick={()=>{showNavBarMenu()}}>&#9776;</a>
        <PageDisplaySection/>
        {/* <div className='displayContainer'>
            <div className="welcomeSection">
                <img src='' alt="ironMan" />
                <label> ! Today is ... day and you are looking at Sabin Raj Bajracharya's profile </label>
            </div>
            <div className='sectionBreaker'></div>
        </div> */}
    </div>)

}