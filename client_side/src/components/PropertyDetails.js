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
      const data = await getDocs(postCollectionRef);
      setUserProperties(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getProperties();
  });

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
        phno,
      });
      navigate("/propertydetails");
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <NavbarComponent setNavLocation={setNavLocation} />
      <div>
        {userProperties.map((post) => {
          if (post.id === userid) {
            return (
              <div className="post" key={post.id}>
                <div className="postHeader">
                  <div className="title">
                    <h1>{post.city}</h1>
                    <button className="primary" onClick={handleShow}>
                      Contack-Seller
                    </button>
                  </div>
                  <Container className="container py-5 h-100">
                    <Row className="row d-flex justify-content-center align-items-center h-100">
                      <Col className="col col-md-9 col-lg-7 col-xl-5">
                        <Card
                          style={{
                            width: "40rem",
                            marginRight: "auto",
                            marginLeft: "auto",
                          }}
                          className="shadow-lg card-body p-4"
                           key={post.id}
                        >
                          {/* key={post.id} */}
                          <div className="card-body p-4">
                            <Card.Img
                              style={{ height: "300px" }}
                              variant="top"
                              className="flex-shrink-0"
                              src={post.coverImg}
                            />
                          </div>

                          <Card.Title className="d-flex rgba-black-strong">
                            <div className="flex-grow-1 ms-3 mb-2">
                              <h2 className="d-flex" style={{}}>
                                Property Name
                              </h2>
                              <h3
                                className="mb-2 pb-1 d-flex"
                                style={{ color: "gray" }}
                              >
                                {post.city}
                              </h3>
                              <small
                                className="mb-1 d-flex"
                                style={{ color: "gray" }}
                              >
                                {post.locality}
                              </small>
                            </div>
                          </Card.Title>
                          <div
                            className="d-flex rgba-black-strong "
                            style={{ justifyContent: "space-evenly" }}
                          >
                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <h5>
                                <b className="small text-muted mb-1">
                                  Flat Type -{" "}
                                </b>
                              </h5>
                              <Card.Title>{post.flatType}</Card.Title>
                            </div>
                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <h5>
                                <b className="small text-muted mb-1">
                                  Price -{post.price}
                                </b>
                              </h5>
                              <Card.Title>Rs.{post.price}/-</Card.Title>
                            </div>

                            <div
                              className="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{
                                backgroundColor: "#efefef",
                                marginLeft: "5px",
                              }}
                            >
                              <h5>
                                <b className="small text-muted mb-1">
                                  Home Type -{" "}
                                </b>
                              </h5>
                              <Card.Title>{post.homeType}</Card.Title>
                            </div>
                          </div>

                          <Card.Text>
                            <div
                              style={{
                                justifyContent: "space-between",
                                marginTop: "10px",
                              }}
                            >
                              <Button
                                style={{
                                  height: "45px",
                                  borderRadius: "0.5",
                                  marginRight: "10px",
                                }}
                                variant="primary"
                              >
                                Button B
                              </Button>
                              <Button
                                style={{
                                  height: "45px",
                                  borderRadius: "0.5",
                                  marginRight: "auto",
                                  marginLeft: "auto",
                                }}
                                variant="primary"
                              >
                                Button A
                              </Button>
                            </div>
                          </Card.Text>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          }
        })}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <br />
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <br />
              <div class="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setphno(e.target.value)}
                ></input>
              </div>
              <br />
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
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
  );
}

export default PropertyDetails;