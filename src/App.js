import React, { Component } from 'react';
import PageHeader from "./PageHeader"
import PageNav from "./PageNav"
import { Grid } from "react-bootstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>

        <PageNav />

        <PageHeader />


      </Grid>
    );
  }
}

export default App;
