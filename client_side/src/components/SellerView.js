import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Navbaruser from "./Narbaruser"

function SellerView({ setIsAuth, isAuth }) {
    const [userProperties, setUserProperties] = useState([])
    const [buyers, setBuyers] = useState([])
    const postCollectionRefP = collection(db, "properties")
    const postCollectionRefB = collection(db, "buyers")

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRefP)
            setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        const getBuyers = async () => {
            const data = await getDocs(postCollectionRefB)
            setBuyers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProperties()
        getBuyers()
    },[])

    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div>
                {
                    userProperties.map((post) => {
                        return (buyers.map((post1) => {
                            if (post1.sellerid === post.id) {
                                console.log(post1.name,post1.email);
                                return (
                                    <div className="post" key={post1.sellerid}>
                                        <div className="postHeader">
                                            <div className="title">
                                                <h1>{post1.name}</h1>
                                                <h1>{post1.email}</h1>
                                                <h1>{post1.phno}</h1>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }))
                    })
                }
            </div>
        </>
    )
}

export default SellerView