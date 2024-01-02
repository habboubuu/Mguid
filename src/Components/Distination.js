import "./DistinationStyle.css";
import DestinationData from "./DistinitionData";
import kech1 from "../Assests/2.jpg";
import kech2 from "../Assests/4.jpg";
import ch1 from "../Assests/12.jpg";
import ch2 from "../Assests/13.jpeg";



//const Destination = () => {
export default function Distination(){
    return(
        <div className="distination">
            <h1>Popular Destinations in Morocco</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinationData 
            className="first-des"
            heading="Marrakech"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island.
            If you fancy a closer look, the hike up to the crater is a mere 45 minutes,
            and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar
            environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot,
            so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={kech2}
            img2={kech1}
            />
            <DestinationData 
            className="first-des-revese"
            heading="chefchaouen, blue city"
            text="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island.
            If you fancy a closer look, the hike up to the crater is a mere 45 minutes,
            and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar
            environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot,
            so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
            img1={ch2}
            img2={ch1}
            />
        </div>
    )
}
//export default Destination;