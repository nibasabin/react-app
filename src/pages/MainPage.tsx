import { HeaderSection } from '../molecules/HeaderSection';
import {BodySection} from '../molecules/BodySection';

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
           
        </div>
        </div>


    )
}
