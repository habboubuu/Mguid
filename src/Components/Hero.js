import "./HeroStyle.css";

export default function Hero(props){
    return(
        <>
        {/* KANDURU PROPS HERO SECTION */}
        <div className={props.cName}>
            <img alt="HeroImg" className="ximg" src={props.heroImg}  loading="lazy"/>
            <div className="hero-text">
                <h1>{props.title}</h1>
                {/*<p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>*/}

            </div>
            
        </div>
        </>
    )
}