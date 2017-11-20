import React, { Component } from 'react';
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import PageNav from "./PageNav";
import Skills from "./Skills";
import Work from "./Work";
import About from "./About";
import { Grid } from "react-bootstrap";
import './App.css';



class App extends Component {
  render() {
    return (
      <Grid fluid={true}>

        <PageNav />

        <PageHeader />

        <a name="work"></a>
        <Work />

        <hr />

        <About />

        <a name="skills"></a>
        <Skills />

        <PageFooter />

      </Grid>
    );
  }
}

export default App;
