import React from "react";
import { Row, Modal, Button } from "react-bootstrap";
import './WorkModal.css';
import WorkModalRow from "./WorkModalRow"


const WorkModal = (props) => {
  return(
    <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WorkModalRow
          heading={props.firstHeading}
          content={props.firstContent}
          image={props.firstImage} />
        <WorkModalRow
          heading={props.secondHeading}
          content={props.secondContent}
          image={props.secondImage} />
        <WorkModalRow
          heading={props.thirdHeading}
          content={props.thirdContent}
          image={props.thirdImage} />

          <div className="repo-link">
        {
          (props.repo)
            ?
            <div>
              <a href={props.repo}>
                <img src={props.repoLogo} alt="Github logo">
                </img>
                <h4>Source Code</h4>
              </a>
            </div>
            : null
        }
        {
          (props.deploy)
            ?
            <div>
              <a href={props.deploy}>
                <img src={props.deployLogo} alt="Github logo">
                </img>
              </a>
            </div>
            : null
        }
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default WorkModal;
