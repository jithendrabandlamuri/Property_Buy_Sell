import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

function Dashboard() {
    const [userProperties, setUserProperties] = useState([]);
    const postCollectionRef = collection(db, "properties");

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRef);
            setUserProperties(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getProperties();
    });

    const renderCard = (card, id) => {
        return (
            <div className="col-md-3">
                <div style={{ width: "18rem" }} className="card shadow-lg" key={id}>
                    <img
                        style={{ height: "300px" }}
                        src={card.coverImg}
                    />
                    <div className="card-body">
                        <div className="card-title">
                            {card.propertyName}
                        </div>
                        <div className="card-text">
                            <b style={{ height: "20px" }}> {card.city}</b>
                            <i style={{ height: "10px" }}> {card.locality} </i>
                        </div>
                        <div className="card-text">
                            <b style={{ height: "20px" }}> {card.flatType}</b>
                            <b style={{ height: "10px" }}> {card.price} </b>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="row">
                    {
                        userProperties.map((post) => {
                            return renderCard(post, post.id);
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Dashboard;
