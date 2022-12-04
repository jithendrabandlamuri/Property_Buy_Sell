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
    }, [])

    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <table className="table" style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th rowSpan="2">Property Name</th>
                        <th colSpan="3">Buyer Details</th>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userProperties.map((post) => {
                            return (buyers.map((post1, Index) => {
                                if (post1.sellerid === post.id) {
                                    return (
                                        <tr key={Index}>
                                            <td>{post.propertyName}</td>
                                            <td>{post1.name}</td>
                                            <td>{post1.email}</td>
                                            <td>{post1.phno}</td>
                                        </tr>
                                    )
                                }
                            }))
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default SellerView