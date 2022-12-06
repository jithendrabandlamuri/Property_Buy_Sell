import { React, useEffect, useState } from "react";
import { getDocs, addDoc, collection } from "firebase/firestore"
import { db, auth } from "../firebase";
import { useNavigate } from 'react-router-dom'
import Navbaruser from "./Narbaruser"

function UserProfile({ setIsAuth, isAuth }) {
    const [FirstName, setFirstName] = useState("")
    const [MiddleName, setMiddleName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Mobile, setMobile] = useState("")
    const [userDetails, setUserDetails] = useState([])


    let navigate = useNavigate()
    const userDetailsCollection = collection(db, "userDetails")


    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
        const getUserDetails = async () => {
            const data = await getDocs(userDetailsCollection)
            setUserDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            userDetails.map((post) => {
                if (post.userid === auth.currentUser.uid) {
                    setFirstName(post.firstName)
                    setMiddleName(post.middleName)
                    setLastName(post.lastName)
                    setEmail(post.email)
                    setMobile(post.phoneNumber)                    
                }
            })
        }
        getUserDetails()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(userDetailsCollection, {
                userid: auth.currentUser.uid,
                firstName: FirstName,
                middleName: MiddleName,
                lastName: LastName,
                email: Email,
                phoneNumber: Mobile
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
                                    <input type="text" className="form-control" placeholder="Enter First name" value={FirstName} onChange={(e) => setFirstName(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-6">
                                    <h5 > Middle Name</h5>
                                    <input type="text" className="form-control" placeholder="Middle name" value={MiddleName} onChange={(e) => setMiddleName(e.target.value)}></input>
                                </div>
                                <div className="col-lg-6">
                                    <h5 >Last Name</h5>
                                    <input type="text" className="form-control" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 >Email</h5>
                                    <input type="email" className="form-control" placeholder="Enter email" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                            </div><br />
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5 >Mobile Number</h5>
                                    <input type="tel" className="form-control" placeholder="Enter Mobile Number" value={Mobile} onChange={(e) => setMobile(e.target.value)}></input>
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
