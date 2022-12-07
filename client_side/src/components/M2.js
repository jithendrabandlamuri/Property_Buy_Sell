import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function M2({ location, budget, flatType, navLocation, propertyV, setuserid }) {
  const [userProperties, setUserProperties] = useState([]);
  const postCollectionRef = collection(db, "properties");
  const navigate = useNavigate();

  useEffect(() => {
    const getProperties = async () => {
      const data = await getDocs(postCollectionRef);
      setUserProperties(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getProperties();
  }, []);

  function handleClick(id) {
    setuserid(id)
    navigate("/propertydetails");
  }

  const renderCard = (card, id) => {
    return (
      <div className="col-xl-3 col-lg-9 col-md-6 mt-4 mb-2" key={id}>
        <div className="card shadow-lg rounded-4" >
          <img
            style={{ height: "300px",borderTopRightRadius:"13px",borderTopLeftRadius:"13px" }}
            src={card.coverImg}
          />
          <div className="card-body">
            <div className="card-title">
              {card.propertyName}
            </div>
            <div className="card-text">
              <b style={{ height: "20px" }}> {card.city}</b>
              <i style={{ height: "10px" }}> {card.locality} </i>
            </div>
            <div className="card-text">
              <b style={{ height: "20px" }}> {card.flatType}</b>
              <b style={{ height: "10px" }}> {card.price} </b>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => { handleClick(id) }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-4 mb-4">
      <div className="row">
        {
          userProperties.map((post) => {
            if (post.propertyType === propertyV) {
              return renderCard(post, post.id);
            } else if (
              post.city === location &&
              post.flatType === flatType &&
              post.price === budget
            ) {
              return renderCard(post, post.id);
            } else if (post.city === navLocation) {
              return renderCard(post, post.id);
            }
          })
        }
      </div>
    </div>
  );
}

export default M2;
