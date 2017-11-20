import React, { Component } from "react";
import { Row, ButtonToolbar, Button, Modal } from "react-bootstrap";
import WorkModal from "./WorkModal";
import "./Work.css";
import dkpThumb from './images/dkp-thumb.png';
import todoThumb from './images/todo-thumb.png';
import dkpSampleData from './images/sampledata-content1.png';
import dkpComparing from './images/dkpcomparing-content2.gif';
import dkpthunk from './images/thunk-content3.png';
import githubLogo from "./images/github.svg"
import herokuLogo from "./images/heroku.svg"
import subTodoGif from "./images/subtodo.gif"
import reduxTodo from "./images/reduxtodo.gif"
import stateTodo from "./images/statetodo.gif"
import portfolioThumb from "./images/portfolio-thumb.png"
import portfolioContent1 from "./images/portfolio-content1.png"
import portfolioContent2 from "./images/portfolio-content2.png"
import portfolioContent3 from "./images/pjce-icon.png"


const modals = [
  {
    thumbnail: dkpThumb,
    title: "Score Data Visualisation",
    firstHeading: "Who",
    secondHeading: "What",
    thirdHeading: "How",
    firstContent: "A community of gamers regularly exported their scores as data but had no means to analyse trends or disparity",
    secondContent: "The users wanted to be able to compare changes to selectable scores at any point over time, as well as to be able to visually compare current scores for selected users. This is achieved by showing the current scores over time by default and showing a diff against the previous export when 'Changes' is selected.",
    thirdContent: "Since data had to be persisted for multiple users over time it made sense to set up a MongoDB solution. Redux was used as a data layer and asynchronous API call outcomes were managed using Thunk.",
    firstImage: dkpSampleData,
    secondImage: dkpComparing,
    thirdImage: dkpthunk,
    repo: "https://github.com/pjcevans/retrowow-dkp-tracker",
    deploy: "http://vgdkp.herokuapp.com/#/ce",
    repoLogo: githubLogo,
    deployLogo: herokuLogo,
  },
  {
    thumbnail: todoThumb,
    title: "Extended To Do App Article",
    firstHeading: "Who",
    secondHeading: "What",
    thirdHeading: "How",
    firstContent: "I wanted to contribue to the open source learning community which has been so helpful in my own study. An advanced To Do application that showcases full CRUD functionality on the front-end using Redux seemed like an effective manner in which to help other developers to discover Redux.",
    secondContent: "The intention was to exemplify 'What I wish I had been told' when first starting out with Redux, such as how to use the Chrome DevTools extension, which is invaluable. A To Do app has a clear set of necessary functions which map to an easy to understand set of actions.",
    thirdContent: "The result is an app showing how actions can be triggered from anywhere in the app and the results are transparent, predictable, and testable. Data is stored in the redux store and persisted in browser cache so that the app is functional regardless of page refreshes but does not have the added complexity of a back end API or database.",
    firstImage: subTodoGif,
    secondImage: reduxTodo,
    thirdImage: stateTodo,
    repo: "https://github.com/pjcevans/todo-react",
    deploy: "https://todo-redux-react.herokuapp.com/",
    repoLogo: githubLogo,
    deployLogo: herokuLogo
  },
  {
    thumbnail: portfolioThumb,
    title: "This Site",
    firstHeading: "Structure",
    secondHeading: "Data",
    thirdHeading: "Design",
    firstContent: "The React app mostly consists of stateless functional components and grid components imported from react-bootstrap. Where necessary stateful components are used to maintain local state and utilise lifecycle methods.",
    secondContent: "The app was made to be as simple as possible and so is serverless and imports locally coded content data, rather than using a microservice API to deliver content.",
    thirdContent: "Design is also kept fairly simple and beyond applying a colour palette and using word clouds the only major design feature is the SVG logo - This is an SVG path which has been broken up into several paths to allow different letters to be formed and highlighted on mouseover or animation.",
    firstImage: portfolioContent1,
    secondImage: portfolioContent2,
    thirdImage: portfolioContent3,
    repo: "https://github.com/pjcevans/portfolio",
    repoLogo: githubLogo
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
                  thirdImage={modal.thirdImage}
                  repo={modal.repo}
                  deploy={modal.deploy}
                  repoLogo={modal.repoLogo}
                  deployLogo={modal.deployLogo} />
              </div>
            );
          })
        }





      </Row>
    );
  }


}
export default Work;
