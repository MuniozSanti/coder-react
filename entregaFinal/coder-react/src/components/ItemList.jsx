import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemList =() => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");

        setIsLoading(true);

        const q = query(itemCollection);

        getDocs(q).then(snapshot => {

            const itemsFromSnapshot = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setItems(itemsFromSnapshot);
            setIsLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>ItemList</h2>

            {isLoading && <p>Cargando...</p>}

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h3>Nombre:{item.title}</h3>
                        <p>ID: {item.id}</p>
                        <p>Descripcion: {item.description}</p>
                        <p>Precio: ${item.price}</p>
                        <p>Stock: {item.stock}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;