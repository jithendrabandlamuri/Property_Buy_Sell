import React from "react";
import { useState } from "react";
import {
  Row,
  Col,
  Button,
  Form
} from "react-bootstrap";

function SearchBar({setlocation,setFlatType,setBudget}) {
  const [location1, setLocation1] = useState("");
  const [flatType1, setFlatType1] = useState("");
  const [budget1, setBudget1] = useState("");

  const flats = ["1 bhk", "2 bhk", "3 BHK", "4 BHK", "5 BHK"];
  const budgets = ["min", "1", "5 Lakhs", "8 Lakhs"];

  const handleSubmit = async(e) => {
    e.preventDefault();
    setlocation(location1)
    setFlatType(flatType1)
    setBudget(budget1)
  };

  return (
    <div>
      <br />
      <div
        style={{ width: "60rem", border: "0.5px solid gray" }}
        className="container rounded border-left-50"
      >
        <Form onSubmit={handleSubmit}>
          <Row className="mt-3 justify-content-center">
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={location1}
                  onChange={(e) => setLocation1(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Select
                value={flatType1}
                onChange={(e) => setFlatType1(e.target.value)}
                aria-label="Default select example"
              >
                <option>Flat</option>
                {flats.map((data) => (
                  <option key={data}>{data}</option>
                ))}
              </Form.Select>
            </Col>
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Select
                value={budget1}
                onChange={(e) => setBudget1(e.target.value)}
                aria-label="Default select example"
              >
                <option>Budget</option>
                {budgets.map((data) => (
                  <option key={data}>{data}</option>
                ))}
              </Form.Select>
            </Col>
            <Col>
              <Button
                type="submit"
                className="btn btn-primary mb-3 ml-0"
                variant="primary"
              >
                search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;