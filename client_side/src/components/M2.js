import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";

function M2({ location, budget, flatType, navLocation,propertyV }) {
  const [userProperties, setUserProperties] = useState([])
  const postCollectionRef = collection(db, "properties")

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(postCollectionRef)
      setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProperties()
  })

  const renderCard = (card, id) => {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="shadow-lg" key={id}>
          <Card.Img
            style={{ height: "300px" }}
            variant="top"
            src={card.image}
          />
          <Card.Body>
            <Card.Title> {card.title}</Card.Title>
            <p>
              <Card.Subtitle>{card.subtitle}</Card.Subtitle>
            </p>
            <Card.Text>
              <b> {card.text}</b> <br />
              <i> onwards </i>
              <Button className="float-end" variant="primary">
                View Details
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-between">
          <Col className="col-lg-4 d-flex justify-content-between align-items-stretch m-5 ">
            {
              userProperties.map((post) => {
                if (post.propertyType === propertyV) {
                  return (
                    renderCard(post, post.id)
                  )
                }
                else if (post.city === location && post.flatType === flatType && post.price === budget) {
                  return (
                    renderCard(post, post.id)
                  )
                }
                else if (post.city === navLocation) {
                  return (
                    renderCard(post, post.id)
                  )
                }
              })
              // {setPropertyT("h")}
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default M2;
