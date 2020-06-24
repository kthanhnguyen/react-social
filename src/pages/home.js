import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";

const headers = {
  muteHttpExceptions: true,
  contentType: "application/json",
  headers: { Accept: "application/json", "X-Requested-With": "XMLHttpRequest" },
};

export class home extends Component {
  state = {
    screams: null,
  };
  componentDidMount() {
    axios
      .get("/screams", headers)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState({ screams: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => <p>{scream.body}</p>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;
