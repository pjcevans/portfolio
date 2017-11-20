import React, { Component } from "react";
import { Row, ButtonToolbar, Button, Modal } from "react-bootstrap";
import WorkModal from "./WorkModal";
import "./Work.css";
import dkpThumb from './images/dkp-thumb.png';
import todoThumb from './images/todo-thumb.png';
import dkpSampleData from './images/sampledata-content1.png';
import dkpComparing from './images/dkpcomparing-content2.png';
import dkpthunk from './images/thunk-content3.png';


const modals = [
  {
    thumbnail: dkpThumb,
    title: "Score Data Visualisation",
    firstHeading: "Who",
    secondHeading: "What",
    thirdHeading: "How",
    firstContent: "A community of gamers regularly exported their scores as data but had no means to analyse trends or disparity",
    secondContent: "The users wanted to be able to compare changes to selectable scores at any point over time, as well as to be able to visually compare current scores for selected users",
    thirdContent: "Since data had to be persisted for multiple users over time it made sense to set up a MongoDB solution. Redux was used as a data layer and asynchronous API call outcomes were managed using Thunk.",
    firstImage: dkpSampleData,
    secondImage: dkpComparing,
    thirdImage: dkpthunk,
    repo: "https://github.com/pjcevans/retrowow-dkp-tracker",
    deploy: "http://vgdkp.herokuapp.com/#/ce"
  },
  {
    thumbnail: todoThumb,
    title: "Extended To Do App Article",
    firstHeading: "Who",
    secondHeading: "What",
    thirdHeading: "How",
    firstContent: "I wanted to contribue to the open source learning community which has been so helpful in my own study. An advanced To Do application that showcases full CRUD functionality on the front-end using Redux seemed like an effective manner in which to help other developers to discover Redux.",
    secondContent: "The intention was to exemplify 'What I wish I had been told' when first starting out with Redux, such as how to use the Chrome DevTools extension, which is invaluable.",
    thirdContent: "The result is an app showing how actions can be triggered from anywhere in the app and the results are transparent, predictable, and testable.",
    firstImage: "www.lorem.com",
    secondImage: "www.lorem.com",
    thirdImage: "www.lorem.com",
    repo: "https://github.com/pjcevans/todo-react",
    deploy: "https://todo-redux-react.herokuapp.com/"
  }
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { lgShow: false, activeModal: 0 };
    this.lgClose = this.lgClose.bind(this);
    this.lgOpen = this.lgOpen.bind(this);
  }

  lgClose()  {
    this.setState({ lgShow: false });
  }
  lgOpen(id) {
    this.setState({ lgShow: true, activeModal: id });
  }

  render() {
    return(
      <Row className="work">

        <h2>Work Examples</h2>
        {
          modals.map((modal, id) => {
            let showModal = false;
            if (this.state.activeModal === id && this.state.lgShow) {
              showModal = true;
            }
            return (
              <div>
                <div onClick={() => this.lgOpen(id)}>
                  <img src={modal.thumbnail} />
                  <h4>{modal.title}</h4>
                </div>

                <WorkModal
                  show={showModal}
                  onHide={this.lgClose}
                  title={modal.title}
                  firstHeading={modal.firstHeading}
                  secondHeading={modal.secondHeading}
                  thirdHeading={modal.thirdHeading}
                  firstContent={modal.firstContent}
                  secondContent={modal.secondContent}
                  thirdContent={modal.thirdContent}
                  firstImage={modal.firstImage}
                  secondImage={modal.secondImage}
                  thirdImage={modal.thirdImage} />
              </div>
            );
          })
        }





      </Row>
    );
  }


}
export default Work;
