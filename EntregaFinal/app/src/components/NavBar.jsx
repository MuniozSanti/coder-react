import { Link, NavLink } from "react-router-dom";
// import "../index.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <h1 className="LogoHeader"> 
                    <Link to="/">SantiMercado</Link>
                </h1>

                <ul className="ul-nav">
                    <li className="li-nav"> <NavLink to="/category/smartphones"> Teléfonos </NavLink> </li>
                    <li className="li-nav"> <NavLink to="/category/tablets"> Tablets </NavLink> </li>
                    <li className="li-nav"> <NavLink to="/category/notebooks"> Notebooks </NavLink> </li>
                    <li > <CartWidget /></li>
                </ul>
            </nav>

           
        </div>
    )
};

export default NavBar;