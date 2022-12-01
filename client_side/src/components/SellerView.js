import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Navbaruser from "./Narbaruser"

function SellerView({ setIsAuth, isAuth }) {
    const [userProperties, setUserProperties] = useState([])
    const postCollectionRef = collection(db, "buyers")

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRef)
            setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProperties()
    })

    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div>
                {
                    userProperties.map((post) => {
                        if (post.sellerid === auth.currentUser.uid) {
                            return (
                                <div className="post" key={post.id}>
                                    <div className="postHeader">
                                        <div className="title">
                                            <h1>{post.name}</h1>
                                            <h1>{post.email}</h1>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default SellerView