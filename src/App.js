import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TaskBoard from "./component/TaskBoard";
import TaskAppBar from "./component/TaskAppBar";
import CleaningRequest from "./component/CleaningRequest";
import TaskView from "./component/TaskView";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";
import CleaningRequestList from "./component/CleaningRequestList";
import "./fonts/BebasNeue.ttf";

function App() {
  const GlobalStyles = createGlobalStyle`body {  @import url('./fonts/BebasNeue.ttf');
      font-family: 'Oswald';  }  `;

  const theme = createTheme({
    palette: {
      primary: {
        main: "#aa8f00",
      },
      secondary: {
        main: "#ddcc80",
      },
    },
    overrides: {
      MuiTab: {
        root: {
          fontWeight: 800,
          color: "red",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>sdasdadadad asdfasdasdas</GlobalStyles>

      <React.Fragment>
        <TaskAppBar theme={theme} />
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={TaskBoard} />
              <Route exact path="/create-request" component={CleaningRequest} />
              <Route exact path="/create-plan" component={CleaningRequest} />
              <Route exact path="/request" component={CleaningRequestList} />
              <Route exact path="/tasks" component={TaskBoard} />
              <Route exact path="/create-task" component={TaskView} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
