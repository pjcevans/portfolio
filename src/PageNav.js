import React, { Component } from "react";
import { Row, Button, Modal } from "react-bootstrap";
import "./PageNav.css";


class PageNav extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false  };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

  }

  // Function to close the Google Forms Modal
  close() {
    this.setState({ showModal: false });
  }

  // Function to open the Google Forms Modal
  open() {
    this.setState({ showModal: true });
  }



  render() {
    return(
      <Row className="nav">

        <p><a href="#skills">Skills</a></p>
        <p><a href="#work">Work</a></p>
        <p onClick={this.open}>Contact</p>
        <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">

          <Modal.Body>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeMmFF7px_BmiO3gzoc28CPjopXk2ORn-8DchmP2o7NKhUrAA/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>

          </Modal.Body>

        </Modal>

      </Row>
    );
  }
}
export default PageNav;
