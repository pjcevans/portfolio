import React from "react";
import { Row, Col } from "react-bootstrap";



const WorkModalRow = (props) => {
  return(
    <Row className={"modal-row"}>
      <Col md={1}>
        <h4>{props.heading}</h4>
      </Col>
      <Col md={4}>
        <p>{props.content}</p>
      </Col>
      <Col md={5}>
        <img src={props.image} />
      </Col>


    </Row>
  );
};
export default WorkModalRow;
