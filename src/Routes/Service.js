import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import image from "../Assests/5.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";


export default function Service(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={image}
        title="Service"
        url="/"
        />
        <Trip />
        <Footer />

        </>
    )
}