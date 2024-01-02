import "./TripStyle.css";
import TripData from "./TripData"
import img1 from "../Assests/15.jpg";
import img2 from "../Assests/14.jpg";
import img3 from "../Assests/4.jpg";


export default function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={img3}
                heading="Trip in Marrakesh"
                text="say hello to the red city
                Between tradition and modernity, Marrakech is the promise of unequalled sensations.
                Strolling the Jemaa El-Fna square and the souks with their shimmering colours and oriental smells,
                the red city offers you a complete change of scenery."
                />

                <TripData
                image={img2}
                heading="Trip in north"
                text="Northern Morocco is lovely to visit throughout the year. Winters can be a bit chilly, however,
                which is good to keep in mind if you’re looking for the sun. Summer is the most popular time for visitors
                because of the wonderful weather."
                />

                <TripData
                image={img1}
                heading="Trip in Taghazout"
                text="Taghazout is a popular place for surfers and offers a generous number of surfing spots,
                from Anchors Point for the more advanced to Taghazout Bay which is ideal for beginners.
                Surfing in Taghazout is an unforgettable experience."
                />
            </div>
        </div>
    )
    
}