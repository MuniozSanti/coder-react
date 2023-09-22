import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../services";
import "../index.css";

const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    getProducts(categoryId).then((response) => {
      setItem(response);
    });
  }, [categoryId]);

    return (
        <ItemList className="body" items={items}/>
    )
};

export default ItemListContainer;