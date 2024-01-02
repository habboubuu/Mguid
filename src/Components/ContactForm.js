import "./ContactForm.css";

export default function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <div className="contactform">
                <input placeholder="name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"/>
                <button className="btnEmail">Send Message</button>
            </div>
        </div>
    )
}