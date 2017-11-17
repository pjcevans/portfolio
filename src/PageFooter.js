import React from "react";
import { Row, Col } from "react-bootstrap";
import "./PageFooter.css";



const PageFooter = (props) => {
  return(
    <Row className="footer">
      <Col xs={12} md={3} mdOffset={3}>
        <p>Get in touch at peterjcevans@gmail.com</p>
      </Col>
      <Col xs={12} md={3}>
        <p>Copyright © 2017 Peter Evans. Built from scratch with React, react-bootstrap, react-wordcloud</p>
      </Col>


    </Row>
  );

};
export default PageFooter;
