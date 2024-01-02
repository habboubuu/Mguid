import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import image from "../Assests/5.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";


export default function Contact(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={image}
        title="Contact"
        url="/"
        />
        <ContactForm />
        <Footer />
        </>
    )
}