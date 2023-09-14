import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Myportfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Testimonial from "../Testimonials";


export default function Home () {
    return (
        <>
            <HeroSection/>
            <MySkills />
            <AboutMe />
            <Myportfolio />
            <Testimonial />
            <ContactMe />
            <Footer />
        
        
        </>
    )
}