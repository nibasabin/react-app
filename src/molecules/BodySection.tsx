import { NavBarSection } from '../molecules/NavBarSection'
import '../css/bodySection.css'
import { ToggleButton } from '../atom/ToggleButton'
export const BodySection = () => {
    return (<div className="bodySectionContainer">
        <NavBarSection/>

        <div className='displayContainer'>
            <div className="welcomeSection">
                <img src='' alt="ironMan" />
                <label> ! Today is ... day and you are looking at Sabin Raj Bajracharya's profile </label>
            </div>
            <div className='sectionBreaker'></div>
        </div>
    </div>)

}