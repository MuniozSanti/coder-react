import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a href="#" className="navbar-brand">Bill`s</a>

            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Vehiculos</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Muebles</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Tecnologia</a>
                </li>
            </ul>

            <CartWidget />
        </div>
        </nav>
    );
};

export default NavBar;