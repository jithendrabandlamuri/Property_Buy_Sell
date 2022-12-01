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
  const userCollection = collection(db, "buyers");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(userCollection, {
        sellerid: userid,
        name,
        email,
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
          if (post.author.id === userid) {
            return (
              <div className="post" key={post.id}>
                <div className="postHeader">
                  <div className="title">
                    <h1>{post.city}</h1>
                    <button className="primary" onClick={handleShow}>
                      Contack-Seller
                    </button>
                  </div>
                  {/* <Container>
                    <Row>
                      <Col>
                        <Card
                          style={{ width: "18rem" }}
                          className="shadow-lg"
                          key={post.id}
                        >
                          <Card.Img
                            style={{ height: "300px" }}
                            variant="top"
                            src={post.coverImg}
                          />
                          <Card.Title
                            style={{ height: "35px", marginBottom: "0px" }}
                          >
                            <p style={{ marginLeft: "10px" }}>
                              {post.locality}
                            </p>
                            <b
                              style={{ marginLeft: "10px", marginRight: "5px" }}
                            >
                              {post.city}
                            </b>
                          </Card.Title>
                          <Card.Body>
                            <p style={{ height: "30px" }}>
                              <Card.Subtitle>{post.flatType}</Card.Subtitle>
                              <Card.Subtitle>{post.price} Lakh</Card.Subtitle>
                              <Card.Subtitle>{post.propertyType}</Card.Subtitle>
                              <Card.Subtitle>{post.homeType}</Card.Subtitle>
                              <Card.Subtitle>{post.flatType}</Card.Subtitle>
                            </p>
                            <Card.Text>
                              <b style={{ height: "20px" }}> {post.text}</b>{" "}
                              <br />
                              <i style={{ height: "10px" }}> onwards </i>
                              <Button
                                style={{ height: "45px", borderRadius: "0.5" }}
                                className="float-end"
                                variant="primary"
                                //   onClick={handleClick}
                              >
                                Button B
                              </Button>
                              <Button
                                style={{ height: "45px", borderRadius: "0.5" }}
                                className=""
                                variant="primary"
                                //   onClick={handleClick}
                              >
                                Button A
                              </Button>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container> */}

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

                          <Card.Title
                            style={{}}
                            className="d-flex align-items-center rgba-black-strong py-5 px-4"
                          >
                            <div className="flex-grow-1 ms-3">
                              <h5 className="mb-1">{post.locality}</h5>
                              <p
                                className="mb-2 pb-1"
                                style={{ color: "#2b2a2a" }}
                              >
                                {post.city}
                              </p>
                            </div>
                            {/* <h5 className="mb-1">Danny McLoan</h5>
            <p className="mb-2 pb-1" style={{color: "#2b2a2a"}}>Senior Journalist</p> */}
                            {/* <p style={{marginTop:"3px" }}></p> 
          <b style={{ marginLeft: "40%" }}>{card.city}</b> */}
                          </Card.Title>
                          {/* <Card.Body className="d-flex align-items-center rgba-black-strong "> */}
                          <div
                            className="d-flex align-items-center rgba-black-strong "
                            style={{ justifyContent: "space-evenly" }}
                          >
                            <div
                              class="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <Card.Title>{post.flatType}</Card.Title>
                            </div>
                            <div
                              class="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <Card.Title>{post.price} Lakh</Card.Title>
                            </div>
                            <div
                              class="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <Card.Title>{post.propertyType}</Card.Title>
                            </div>
                            <div
                              class="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <Card.Title>{post.homeType}</Card.Title>
                            </div>
                            <div
                              class="d-flex justify-content-start rounded-3 p-2 mb-2"
                              style={{ backgroundColor: "#efefef" }}
                            >
                              <Card.Title>{post.flatType}</Card.Title>
                            </div>
                          </div>
                          <Card.Text>
                            {/* <b style={{ height: "20px" }}> {card.text}</b> <br />
            <i style={{ height: "10px" }}> onwards </i> */}
                            <div style={{ justifyContent: "space-inbetween" }}>
                              <Button
                                style={{ height: "45px", borderRadius: "0.5" }}
                                className="float-end"
                                variant="primary"
                              >
                                Button B
                              </Button>
                              <Button
                                style={{
                                  height: "45px",
                                  borderRadius: "0.5",
                                  marginRight: "5px",
                                }}
                                className="float-end"
                                variant="primary"
                              >
                                Button A
                              </Button>
                            </div>
                          </Card.Text>
                          {/* </Card.Body> */}
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
