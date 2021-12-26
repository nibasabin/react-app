import { HeaderSection } from '../molecules/HeaderSection';
import {BodySection} from '../molecules/BodySection';

interface MainPageProps {
    title: string;

}


export const MainPage = (mainPageProps: MainPageProps) => {
    return (
        <div className="root">
            <HeaderSection/>
            <BodySection/>
           
        </div>

    )
}
