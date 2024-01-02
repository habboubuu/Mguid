import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Component } from "react";
import { NavLink } from "react-router-dom";


class Navbar extends Component{
    state = { clicked: false}; //state katkun m3a class components  
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Mguid</h1>

                {/* ======== had lines mas2la taghyer icons bars l X ====== */}
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                {/* ==================================================== */}

                {/* kandir code dynamique */}
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                    <button className="btnNav">Sign Up</button>
                </ul>
            </nav>
        );
    }
}
export default Navbar;