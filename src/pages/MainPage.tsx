
import { SocialMediaBar } from '../atom/SocialMediaBar';
import { HeaderSection } from '../molecules/HeaderSection';

interface MainPageProps {
    title: string;

}


export const MainPage = (mainPageProps: MainPageProps) => {
    return (
        <div className="root">
            <HeaderSection/>
        </div>

    )
}
