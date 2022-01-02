import { HeaderSection } from '../molecules/HeaderSection';
import {BodySection} from '../molecules/BodySection';
import { FooterSection } from '../molecules/FooterSection';

interface MainPageProps {
    title: string;

}


export const MainPage = (mainPageProps: MainPageProps) => {
    return (
        <div className='container-fluid'>
        <div className="container root">
            <HeaderSection/>
            <div className='sectionBreaker'></div>
            <BodySection/>
            <FooterSection/>
           
        </div>
        </div>


    )
}
