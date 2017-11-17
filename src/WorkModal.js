import React from "react";
import { Row, Modal, Button } from "react-bootstrap";
import './WorkModal.css';


const WorkModal = (props) => {
  return(
    <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.title}</h4>
        <Row className={"modal-row"}>
          <p>{props.firstHeading}</p>
          <p>{props.firstContent}</p>
          <p>{props.firstImage}</p>
        </Row>
        <Row className={"modal-row"}>
          <p>{props.secondHeading}</p>
          <p>{props.secondContent}</p>
          <p>{props.secondImage}</p>
        </Row>
        <Row className={"modal-row"}>
          <p>{props.thirdHeading}</p>
          <p>{props.thirdContent}</p>
          <p>{props.thirdImage}</p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default WorkModal;
