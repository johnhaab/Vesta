import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import axios from "axios";

import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      info: [],
      isLoaded: false,
      isActive: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  fetchData() {
    axios
      .get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/` + this.state.input
      )
      .then((res) => {
        const info = res.data.shift();
        this.setState({ info: info });
        console.log(info);
        this.setState({ isLoaded: true });
      });
  }

  validateInput() {
    if (this.state.input === "") {
      this.setState({ isActive: true });
    } else {
      this.fetchData();
    }
  }

  componentDidMount() {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/dictionary`)
      .then((res) => {
        const info = res.data.shift();
        this.setState({ info: info });
        console.log(info);
        this.setState({ isLoaded: true });
      });
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  activeContent() {
    return (
      <div className="mt">
        <Stack spacing={2}>
          <Alert
            severity="error"
            onClose={() => {
              // eslint-disable-next-line no-lone-blocks
              {
                this.setState({ isActive: false });
              }
            }}
          >
            Please enter a word to look up!
          </Alert>
        </Stack>
      </div>
    );
  }

  inActiveContent() {
    return;
  }

  render() {
    const activeVariable = this.activeContent();

    const inactiveVariable = this.inActiveContent();
    if (this.state.isLoaded === false) {
      return (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else if (this.state.isLoaded === true) {
      return (
        <div className="app">
          <>{this.state.isActive ? activeVariable : inactiveVariable}</>
          <Nav />
          <Search
            fetchData={this.fetchData}
            onInputChange={this.onInputChange}
            validateInput={this.validateInput}
          />
          <Body info={this.state.info} />
        </div>
      );
    }
  }
}

export default App;
