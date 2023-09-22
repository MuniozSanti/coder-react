import { Link, NavLink } from "react-router-dom";
import "../index.css";

const NavBar = () => {
    return (
        <div>
            <nav className="nav">
                <h1 className="LogoHeader"> 
                    <Link to="/">SantiMercado</Link>
                </h1>

                <ul className="ul-nav">
                    <li className="li-nav"> <NavLink to="/category/phones"> Teléfonos </NavLink> </li>
                    <li className="li-nav"> <NavLink to="/category/tablets"> Tablets </NavLink> </li>
                    <li className="li-nav"> <NavLink to="/category/notebooks"> Notebooks </NavLink> </li>
                </ul>
            </nav>

            <div className="body">
                CartWidget
            </div>
        </div>
    )
};

export default NavBar;