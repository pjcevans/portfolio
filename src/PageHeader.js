import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./PageHeader.css";
import MdReplay from "react-icons/lib/md/replay";


class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { activeClass: "white", animate: ["peter", "john", "clifford", "evans"] };
    this.handlePeter = this.handlePeter.bind(this);
    this.handleJohn = this.handleJohn.bind(this);
    this.handleClifford = this.handleClifford.bind(this);
    this.handleEvans = this.handleEvans.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.tick = this.tick.bind(this);

  }

  componentDidMount() {
    this.startAnimation();
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }


  startAnimation() {
    clearInterval(this.state.intervalId);
    this.setState({animate: ["peter", "john", "clifford", "evans"]});
    let intervalId = setInterval(this.tick, 2000);
    this.setState({intervalId: intervalId});
  }

  tick() {
    if (this.state.animate.length === 0) {
      this.handleClear();
      clearInterval(this.state.intervalId);
    } else {
      let newClass = this.state.animate[0];
      let newAnimate = this.state.animate.slice(1);
      this.setState({activeClass: newClass, animate: newAnimate});
    }
  }

  handlePeter() {
    this.setState({ activeClass: "peter" });
  }
  handleJohn() {
    this.setState({ activeClass: "john" });
  }
  handleClifford() {
    this.setState({ activeClass: "clifford" });
  }
  handleEvans() {
    this.setState({ activeClass: "evans" });
  }
  handleClear() {
    this.setState({ activeClass: "white" });
  }

  render() {
    return(
      <Row className="header">

        <svg version="1.1"
          xmlns="http://www.w3.org/2000/svg" xmlnslink="http://www.w3.org/1999/xlink" xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          x="0px" y="0px" width="83.5px" height="83px" viewBox="0 0 83.5 83" enable-background="new 0 0 83.5 83" xmlSpace="preserve">
          <defs>
          </defs>
          <line className={this.state.activeClass + "johnblue" + " " + this.state.activeClass + "evansblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" x1="44" y1="10.5" x2="83" y2="10.5"/>
          <line className={this.state.activeClass + "peterblue" + " " + this.state.activeClass + "johnblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" x1="6" y1="10.5" x2="44" y2="10.5"/>
          <polyline className={this.state.activeClass + "peterblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" points="3,81.5 3,10.5
            6,10.5 "/>
          <path className={this.state.activeClass + "cliffordblue" + " " + this.state.activeClass + "evansblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M82.9,37.1
            c-56.2-7.9-57.5,51.8,0,41.8"/>
          <path fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M33.7,0"/>
          <path className={this.state.activeClass + "peterblue" + " " + this.state.activeClass + "johnblue" + " " + this.state.activeClass + "evansblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M46.8,44.4
            c7-8.3,7.2-21.7-5.3-33.7"/>
          <path className={this.state.activeClass + "peterblue" + " " + this.state.activeClass + "johnblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M7.3,45.2
            c16.2,11.3,31.9,8.2,39.5-0.9"/>
          <path className={this.state.activeClass + "peterblue" + " " + this.state.activeClass + "johnblue"} fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M4.5,43.1
            c0.9,0.8,1.9,1.5,2.8,2.1"/>
          <path fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M7,39.2"/>
          <path fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M7,39.2"/>
          <path fill="none" stroke-width="6" stroke-linejoin="round" stroke-miterlimit="10" d="M3.2,35.3"/>
        </svg>

        <p>
          <span onMouseLeave={this.handleClear} onMouseEnter={this.handlePeter} className={this.state.activeClass + "peterblue"}>Peter </span>
          <span onMouseLeave={this.handleClear} onMouseEnter={this.handleJohn} className={this.state.activeClass + "johnblue" + " " + "middles"}>John </span>
          <span onMouseLeave={this.handleClear} onMouseEnter={this.handleClifford} className={this.state.activeClass + "cliffordblue" + " " + "middles"}>Clifford </span>
          <span onMouseLeave={this.handleClear} onMouseEnter={this.handleEvans} className={this.state.activeClass + "evansblue"}>Evans</span>
        </p>

        <MdReplay size={24} className="replay" onClick={() => this.startAnimation()}/>



      </Row>
    );
  }
}
export default PageHeader;
