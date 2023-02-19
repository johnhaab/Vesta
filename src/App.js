import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      info: [],
      isLoaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
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
      });
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <Nav />
        <Search fetchData={this.fetchData} onInputChange={this.onInputChange} />
        <Body info={this.state.info} />
      </div>
    );
  }
}

export default App;
