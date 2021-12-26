import '../css/navBarSection.css';
import profilePic from'../images/nibasabin.jpg';

export const NavBarSection = () => {
    return (
        <div className='menuBarContainer'>
            <div className='imageContainer'>
                <div className='imageBlock'>
                <img src={profilePic} alt='profilePic' className='imageFile'></img>
                </div>
            </div>
            <div className='menuBar'>
                
            </div>
        </div>
    )
}