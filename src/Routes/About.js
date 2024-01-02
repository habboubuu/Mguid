import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import image from "../Assests/5.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";



export default function About(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={image}
        title="About"
        url="/"
        />
        <AboutUs />
        <Footer />
        </>
    )
}