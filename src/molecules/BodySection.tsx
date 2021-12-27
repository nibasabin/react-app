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
        
    </div>)

}