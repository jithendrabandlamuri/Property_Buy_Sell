import React from "react";

import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";

function Mainpage() {
  const cardInfo = [
    {
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "DS Max Synergy",
      subtitle: "by DS Max Properties Pvt Ltd. Agrahara, Bangalore",
      text: "INR 32 Lacs",
    },
    {
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Navami Landmarks",
      subtitle: "Navami Builders and Developers Mysore Road, Bangalore",
      text: "INR 26.2 Lacs",
    },
    {
      image:
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "RRL Nature Wood",
      subtitle: "RRL Builders and Developers Sarjapur, Bangalore",
      text: "INR 45.6 Lacs",
    },
    {
      image:
        "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Vaishnavi Serene",
      subtitle: "Vaishnavi Group Yelahanka",
      text: "INR 94.7 Lacs",
    }
  ];
  const renderCard = (card, index)=>{
    return (
      <div>
        <Col xs={3} className="col-lg-3 d-flex align-items-stretch mt-5">
          <Card style={{ width: "18rem" }} className="shadow-lg" key={index}>
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
        </Col>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <Row>{cardInfo.map(renderCard)}</Row>
      </Container>
    </div>
  );
}

export default Mainpage;
