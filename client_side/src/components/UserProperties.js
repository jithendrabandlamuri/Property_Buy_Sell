import React, { useEffect, useState } from "react";
import {
    getDocs,
    collection,
    deleteDoc,
    doc,
    setDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import Navbaruser from "./Narbaruser";
import { useNavigate } from "react-router-dom";

function UserProperties({ setIsAuth, isAuth }) {
    const [userProperties, setUserProperties] = useState([]);
    const postCollectionRef = collection(db, "properties");

    const navigate = useNavigate();

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRef);
            setUserProperties(
                data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        getProperties();
    }, []);

    const deleteProperty = async (id) => {
        const postDoc = doc(db, "properties", id);
        await deleteDoc(postDoc);
        navigate("/userproperties")
    };

    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div className="container mx-auto mt-4">
                <div
                    className="row"
                    style={{
                        justifyContent: "space-around",
                        marginTop: "7em",
                    }}
                >
                    {userProperties.map((post) => {
                        if (post.author.id === auth.currentUser.uid) {
                            return (
                                <div className="col-5" key={post.id}>
                                    <div
                                        className="card shadow-lg rounded-4"
                                    >
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "300px",
                                                borderTopRightRadius:
                                                    "13px",
                                                borderTopLeftRadius: "13px",
                                            }}
                                            src={post.coverImg}
                                        />
                                        <div
                                            className="card-body"
                                            style={{
                                                display: "flex",
                                                justifyContent:
                                                    "space-around",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                }}
                                            >
                                                <div className="card-title">
                                                    {post.propertyName}
                                                </div>
                                                <div className="card-text">
                                                    <b
                                                        style={{
                                                            height: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {post.city}
                                                    </b>
                                                    <i
                                                        style={{
                                                            height: "10px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {post.locality}{" "}
                                                    </i>
                                                </div>
                                                <div className="card-text">
                                                    <b
                                                        style={{
                                                            height: "20px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {post.flatType}
                                                    </b>
                                                    <b
                                                        style={{
                                                            height: "10px",
                                                        }}
                                                    >
                                                        {" "}
                                                        {post.price}{" "}
                                                    </b>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "end",
                                                    justifyContent:
                                                        "space-around",
                                                }}
                                            >
                                                <div className="deletePost">
                                                    {isAuth &&
                                                        post.author.id ===
                                                        auth.currentUser
                                                            .uid && (
                                                            <button
                                                                className="btn btn-danger"
                                                                onClick={() => {
                                                                    deleteProperty(
                                                                        post.id
                                                                    );
                                                                }}
                                                            >
                                                                Delete
                                                            </button>
                                                        )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    );
}

export default UserProperties;
