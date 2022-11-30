import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Navbaruser from "./Narbaruser"

function UserProperties({ setIsAuth, isAuth }) {
    const [userProperties, setUserProperties] = useState([])
    const postCollectionRef = collection(db, "properties")

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRef)
            setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProperties()
    })

    const deleteProperty = async (id) => {
        const postDoc = doc(db, "properties", id)
        await deleteDoc(postDoc)
    }
    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <div>
                {
                    userProperties.map((post) => {
                        if (post.author.id === auth.currentUser.uid) {
                            return (
                                <div className="post" key={post.id}>
                                    <div className="postHeader">
                                        <div className="title">
                                            <h1>{post.city}</h1>
                                        </div>
                                        <div className="deletePost">
                                            {isAuth && post.author.id === auth.currentUser.uid && (<button onClick={() => { deleteProperty(post.id) }}>&#128465;</button>)}
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

export default UserProperties