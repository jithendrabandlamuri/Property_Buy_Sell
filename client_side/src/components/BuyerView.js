import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import Navbaruser from "./Narbaruser"

function BuyerView({ setIsAuth, isAuth }) {
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
            <br/><br/>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <table className="table" style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th colSpan="6">Property Details</th>
                                </tr>
                                <tr>
                                    <th>Property Name</th>
                                    <th>City</th>
                                    <th>Locality</th>
                                    <th>Address</th>
                                    <th>Flat type</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyers.map((post1, Index) => {
                                        return (userProperties.map((post) => {
                                            if (post1.sellerid === post.id && post1.uid === auth.currentUser.uid) {
                                                return (
                                                    <tr key={Index}>
                                                        <td>{post.propertyName}</td>
                                                        <td>{post.city}</td>
                                                        <td>{post.locality}</td>
                                                        <td>{post.address}</td>
                                                        <td>{post.flatType}</td>
                                                        <td>Rs.{post.price}/-</td>
                                                    </tr>
                                                )
                                            }
                                        }))
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyerView