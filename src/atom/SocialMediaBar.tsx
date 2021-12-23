import '../css/socialMediaBar.css';

export const SocialMediaBar = () => {

    return (
        <div className='socialMediaContainer'>
            <div className='socialMediaBar'>
                <a href='https://www.facebook.com/sabin.bajracharya' target="_blank" className="fab fa-facebook-f" />

                <a href='https://www.instagram.com/nibasabin/' target="_blank" className="fab fa-instagram" />


                <a href='https://www.linkedin.com/in/sabin-raj-bajracharya-4965a7145/' target="_blank" className="fab fa-linkedin-in" />

                <a href='#' target="_blank" className="fab fa-github" />

                <a href='#' target="_blank" className="fab fa-whatsapp" />

            </div>
        </div>
    )
}