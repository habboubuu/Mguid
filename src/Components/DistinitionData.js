import { Component } from "react";
import "./DistinationStyle.css";

//Kandiru components bach ykun dakchi dynamique m3a saf7a Distination.js
class DestinationData extends Component{
    render(){
        return(
            //hana kandiru had lclass f props 7it part 2 ghadi n7taju n9lbuh hadchi 3lach khadi ykhsna props
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} loading="lazy"/>
                    <img alt="img" src={this.props.img2} loading="lazy"/>
                </div>
            </div>
        );
    }
}
export default DestinationData;