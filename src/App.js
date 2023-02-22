import React, { Component } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Body from "./components/Body/Body";
import axios from "axios";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkMode = () =>
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: "#121212",
        div: "#535353",
      },
      accent: {
        background: "#363636",
        opacity: "0.8",
      },
      text: {
        primary: "#ffffff",
        other: "#ffffff5d",
        textDecoration: "none",
      },
      divider: {
        primary: "#535353",
      },
    },
    typography: {
      h1: {
        color: "#ffffff",
        textDecoration: "none",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          ":root": {
            "--theme-color": (theme) => theme.palette.text.primary,
            "--theme-color-2": (theme) => theme.palette.background.div,
          },
        },
      },
    },
  });

const lightMode = () =>
  createTheme({
    palette: {
      mode: "light",
    },
  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      info: [],
      isLoaded: false,
      isActive: false,
      isHover: false,
      hasError: false,
      font: "'Labrada', serif",
      theme: lightMode(),
    };
    this.fetchData = this.fetchData.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  checkTheme = () => {
    this.setState((prevState) => {
      if (prevState.theme.palette.mode === "dark") {
        return { theme: lightMode() };
      } else {
        return { theme: darkMode() };
      }
    });
  };

  fetchData() {
    console.log(this.state.theme.palette);
    this.setState({ isLoaded: false });
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
    console.log(this.state.theme);
    this.setState({ isLoaded: false });
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

  onMouseEnterHandler = () => {
    this.setState({
      isHover: true,
    });
  };

  onMouseLeaveHandler = () => {
    this.setState({
      isHover: false,
    });
  };

  onSerif = () => {
    this.setState({ font: "'Labrada', serif" });
  };

  onModern = () => {
    this.setState({ font: "'Montserrat', sans-serif" });
  };

  render() {
    const activeVariable = this.activeContent();

    const inactiveVariable = this.inActiveContent();
    if (this.state.hasError) {
      return (
        <div>
          <h2>
            Something went wrong, let me know so i can fix it{" "}
            <a href="twitter.com/johnlhaab">@johnlhaab</a>
          </h2>
        </div>
      );
    } else {
      if (this.state.isLoaded === false) {
        return (
          <ThemeProvider theme={this.state.theme}>
            <CssBaseline />
            <CircularProgress color="error" className="loader" />
          </ThemeProvider>
        );
      } else if (this.state.isLoaded === true) {
        return (
          <ThemeProvider theme={this.state.theme}>
            <CssBaseline />
            <div className="app" style={{ fontFamily: this.state.font }}>
              <>{this.state.isActive ? activeVariable : inactiveVariable}</>
              <Nav
                isHover={this.state.isHover}
                font={this.state.font}
                theme={this.state.theme}
                onMouseEnterHandler={this.onMouseEnterHandler}
                onMouseLeaveHandler={this.onMouseLeaveHandler}
                onSerif={this.onSerif}
                onModern={this.onModern}
                checkTheme={this.checkTheme}
              />
              <Search
                fetchData={this.fetchData}
                onInputChange={this.onInputChange}
                validateInput={this.validateInput}
              />
              <Body info={this.state.info} />
            </div>
          </ThemeProvider>
        );
      }
    }
  }
}

export default App;
