import React from "react";

import { Row, Col, Container, Card, Button, Form } from "react-bootstrap";
import {db} from '../firebase';
import { collection, doc, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import {useLocation} from "react-router-dom";

function M2() {
  const [users,setUsers] = useState([]);
  const userCollectionRef = collection(db,"properties");
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('propertyType');
  console.log(name)

  useEffect(()=>{
       const q=query(userCollectionRef, where("propertyType","==","Rent"));
    const getUsers = async()=>{
      const data = await getDocs(q);
      setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
      console.log("city",users);
    };
    getUsers();
  },[]);


  

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
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div>
        
          <Card style={{ width: "18rem" }} className="shadow-lg" key={index}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src={card.files}
            />
            <Card.Body>
              <Card.Title> {card.city}</Card.Title>
                <Card.Subtitle>{card.subtitle}</Card.Subtitle>
              <Card.Text>
                <b> {card.text}</b> <br />
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
          {users.map(renderCard)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default M2;
