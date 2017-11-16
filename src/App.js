import React, { Component } from 'react';
import PageHeader from "./PageHeader";
import PageNav from "./PageNav";
import Skills from "./Skills";
import { Grid } from "react-bootstrap";
import './App.css';



class App extends Component {
  render() {
    return (
      <Grid fluid={true}>

        <PageNav />

        <PageHeader />

        <Skills />



      </Grid>
    );
  }
}

export default App;
