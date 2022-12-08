import React, { useState, useEffect } from "react";
import { getDocs, collection,deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase";
import AdminNavbar from "./AdminNavbar";

function AdminSellerView() {
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

    const deleteProperty = async (id) => {
        const postDoc = doc(db, "properties", id);
        await deleteDoc(postDoc);
    };

    const renderCard = (card, id) => {
        return (
            <div className="col-xl-3 col-lg-4 col-md-6 mt-4 mb-2" key={id}>
                <div className="card shadow-lg rounded-4" >
                    <img
                        style={{ height: "300px", borderTopRightRadius: "13px", borderTopLeftRadius: "13px" }}
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
                        <div className="text-center">
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    deleteProperty(
                                        card.id
                                    );
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto mt-4 mb-4">
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

export default AdminSellerView;
