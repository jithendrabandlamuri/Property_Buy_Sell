import { React, useEffect, useState } from "react";
import { getDocs, addDoc, collection } from "firebase/firestore"
import { db, storageRef, auth } from "../firebase";
import { useNavigate } from 'react-router-dom'
import Navbaruser from "./Narbaruser"

function UserProfile({ setIsAuth, isAuth }) {
    const [FirstName, setFirstName] = useState("")
    const [MiddleName, setMiddleName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")

    let navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [])

    const postCollectionRef = collection(db, "userDetails")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(postCollectionRef, {
                userid:auth.currentUser.uid,
                firstName:FirstName,
                middleName:MiddleName,
                lastName:LastName,
                email:Email,
                phoneNumber:Mobile
            });
            navigate("/userMain");
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <>
            <Navbaruser setIsAuth={setIsAuth} isAuth={isAuth} />
            <br />
            <div className="container d-flex justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 >First Name</h5>
                                    <input type="text" className="form-control" placeholder="Enter First name" onChange={(e) => setFirstName(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 > Middle Name</h5>
                                    <input type="text" className="form-control" placeholder="Middle name" onChange={(e) => setMiddleName(e.target.value)}></input>
                                </div>
                                <div className="col-lg-6">
                                    <h5 >Last Name</h5>
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 >Email</h5>
                                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 >Mobile Number</h5>
                                    <input type="tel" className="form-control" placeholder="Enter Mobile Number" onChange={(e) => setMobile(e.target.value)}></input>
                                </div>
                            </div><br />
                            <button className="btn btn-primary" onClick={handleSubmit} >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </>

    )
}


export default UserProfile
