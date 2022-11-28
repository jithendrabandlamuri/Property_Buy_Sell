import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Breadcrumb,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
  return (
    <div>
      <br />
      <div
        style={{ width: "60rem", border: "0.5px solid gray" }}
        className="container rounded border-left-50"
      >
        <Form>
          <Row className="mt-3 justify-content-center">
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="Location" />
              </Form.Group>
            </Col>
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Select aria-label="Default select example">
                <option>Flat</option>
                <option value="1">1 Bhk</option>
                <option value="2">2 Bhk</option>
              </Form.Select>
            </Col>
            <Col xs={3} style={{ marginLeft: "20px", marginBottom: "4px" }}>
              <Form.Select aria-label="Default select example">
                <option>Budget</option>
                <option value="1">1 Lakh</option>
                <option value="2">5 Lakhs</option>
                <option value="3">10 Lakhs</option>
              </Form.Select>
            </Col>
            <Col>
              <Button className="btn btn-primary mb-3 ml-0" variant="primary">
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
