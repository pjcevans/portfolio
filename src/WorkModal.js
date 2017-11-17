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
        <Row className={"modal-row"}>
          <h4>{props.firstHeading}</h4>
          <p>{props.firstContent}</p>
          <img src={props.firstImage} />
        </Row>
        <Row className={"modal-row"}>
          <h4>{props.secondHeading}</h4>
          <p>{props.secondContent}</p>
          <img src={props.secondImage} />
        </Row>
        <Row className={"modal-row"}>
          <h4>{props.thirdHeading}</h4>
          <p>{props.thirdContent}</p>
          <img src={props.thirdImage} />
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default WorkModal;
