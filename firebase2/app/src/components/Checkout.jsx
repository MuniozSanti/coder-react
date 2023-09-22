import { getFirestore, collection, addDoc, doc, updateDoc, writeBatch } from "firebase/firestore";
import { useState } from "react";

const Checkout = () => {
    const [orderId, setOrderId] = useState(null);

    const createOrder = () => {
        //hardcodear la orden
        const order = {
            buyer: {
                name: 'John',
                phone: "123",
                email: "john@example.com",
            },
            items: [
                {
                    id: "cYTyvkChLS8GbgRIrJKK",
                    title: "Iphone 12",
                    price: 700,
                },
                {
                    id: "6onaetcajzKTbQF68Yng",
                    title: "ipad",
                    price: 800,
                },
            ],
            total: 1500
        };

        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order)
          .then((docRef) => {
                console.log("Orden creada con ID: ", docRef.id);
                setOrderId(docRef.id);
            })
            .catch((error) => {
                console.log("Error al crear la orden: ", error);
            });
    };

    const updateOrder = () => {
        const db = getFirestore();

        const orderDoc = doc (db, "orders", orderId);

        updateDoc(orderDoc, {total: 2000})
        .then(() => {
            console.log("Total actualizado");
            alert("orden actualizada");
        }).catch((error) => {
            console.log("Error al actualizar el total: ", error);
        });
    };

    const updateOrders = () => {
        const db = getFirestore();

        const batch = writeBatch(db);

        const doc1 = doc (db, "orders", "8pwIu3gOUK1SEOnGfXwM");
        const doc2 = doc (db, "orders", "WQ7iodACkVuEg4jBzVQw");
        const doc3 = doc (db, "orders", "m1mFuTDnqvEwzbksQnJQ");
        
        batch.update(doc1, {total: 3000});

        batch.update(doc2, {total: 4000});

        batch.update(doc3, {total: 5000}, {merge: true});


        batch.commit()
        .then(() => {
          console.log("Ordenes actualizadas");
        })
        .catch((error) => {
          console.error("Error al actualizar las ordenes: ", error);
        });
        
    };


    return <div>
        <h2>Checkout</h2>

        <button onClick={createOrder}>Crear orden</button>
        {!!orderId && <p>Orden creada con ID: {orderId} </p>}
        
        <hr />

        {!!orderId && <button onClick={updateOrder}>Actualizar orden</button>}

        <button onClick={updateOrders}>Actualizar ordenes</button>
    </div>

};

export default Checkout;