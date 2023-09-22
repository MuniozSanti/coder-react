const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart2"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    7
                    <span className="visually-hidden">Productos en carro</span>
                </span>
            </button>
        </div>
    )

};

export default CartWidget;