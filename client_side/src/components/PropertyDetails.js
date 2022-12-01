import React, { useEffect, useState } from "react";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import { Row, Col, Container, Card, Form } from "react-bootstrap";

function PropertyDetails({ userid, setNavLocation }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [userProperties, setUserProperties] = useState([]);
  const postCollectionRef = collection(db, "properties");

    useEffect(() => {
        const getProperties = async () => {
            const data = await getDocs(postCollectionRef)
            setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProperties()
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setphno] = useState("");
    const userCollection = collection(db, "buyers");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(userCollection, {
                sellerid: userid,
                name,
                email,
                phno
            });
            navigate("/propertydetails")
            handleClose()
        } catch (err) {
            console.log(err.message);
        }
    };


    return (
        <>
            <NavbarComponent setNavLocation={setNavLocation} />
            <div>
                {
                    userProperties.map((post) => {
                        if (post.id === userid) {
                            return (
                                <div className="post" key={post.id}>
                                    <div className="postHeader">
                                        <div className="title">
                                            <h1>{post.city}</h1>
                                            <button className="primary" onClick={handleShow}>Contack-Seller</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div class="form-group">
                                <label >Name</label>
                                <input type="text" class="form-control" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}></input>
                            </div><br />
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}></input>
                            </div><br />
                            <div class="form-group">
                                <label >Phone Number</label>
                                <input type="text" class="form-control" placeholder="Enter Phone Number" onChange={(e) => setphno(e.target.value)}></input>
                            </div><br />
                            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default PropertyDetails;
