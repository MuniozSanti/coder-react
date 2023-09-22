import PropTypes from "prop-types";
import "../index.css";

const ItemDetail = ({ item }) => {
    if (!item) {
        return null;
    };

    return (
        <div className="body">
            <h1>{item.name}</h1> 
            <p>${item.price}</p>
            <p>{item.category}</p>
        </div>
    )
};

ItemDetail.propTypes = {
    item: PropTypes.object,
};

export default ItemDetail;