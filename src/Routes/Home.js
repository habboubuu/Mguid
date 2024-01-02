import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import image from "../Assests/15.jpg";
import Distination from "../Components/Distination";
import Trip from "../Components/Trip"
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";



export default function Home(){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg={image}
        />

            <div className="formall">
                <form action="">
                    <h3>Enjoy Your Holiday</h3>
                    <p>Choose Your Favourite Destination.</p>
                    <select className="options">
                        <option value="casablanca">casablanca</option>
                        <option value="marrakesh">Marrakesh</option>
                        <option value="taghazout">Taghazout</option>
                        <option value="sahara">Sahara Desert</option>
                        <option value="north">North</option>
                    </select>
                    <div className="date">
                        <input type='date' placeholder='Check In' />
                        <input type='date' placeholder='Check Out' />
                    </div>
                    <div className="number">
                        <input type='number' placeholder='Adult(s)(+18)' />
                        <input type='number' placeholder='Childern(0 - 17)' />
                    </div>
                    <input type='number' placeholder='Rooms' className="rooms" />
                    <input type='Submit' value='Search' placeholder='Rooms' className="submit"/>

                </form>
            </div>

        <Distination />
        <div style={{background:"#000", margin:"0 .2rem" ,padding:"2rem 1rem", borderRadius:"7px"}}>
            <Slider />
        </div>
        <Trip />
        <Footer />
        </>
    );
}