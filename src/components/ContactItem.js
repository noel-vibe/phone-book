import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactItem = ({ item }) => {
  return (
    <div>
      <Row>
        <Col sm={1}>
          <img
            width={30}
            src="https://i.pinimg.com/236x/a5/e8/4d/a5e84dd8104ba6287b72e16401d173d7.jpg"
          />
        </Col>
        <Col sm={11}>
          <h5>{item.name} {item.phoneNumber}</h5>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;