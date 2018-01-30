// import { h, Component } from "preact";
// import { Router } from "preact-router";

// import Header from "./header";
// import Home from "../routes/home";
// import Profile from "../routes/profile";
// // import Home from 'async!../routes/home';
// // import Profile from 'async!../routes/profile';

// if (module.hot) {
//   require("preact/debug");
// }

// export default class App extends Component {
//   /** Gets fired when the route changes.
//    *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
//    *	@param {string} event.url	The newly routed URL
//    */
//   handleRoute = e => {
//     this.currentUrl = e.url;
//   };

//   render() {
//     return (
//       <div id="app">
//         <Header />
//         <Router onChange={this.handleRoute}>
//           <Home path="/" />
//           <Profile path="/profile/" user="me" />
//           <Profile path="/profile/:user" />
//         </Router>
//       </div>
//     );
//   }
// }

import { h, Component } from "preact";
import { Router } from "preact-router";

import Nav from "./nav";
import Home from "../routes/home";
import Party from "../routes/party";
import Profile from "../routes/profile";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
  //require("preact/debug");
}

import { withStyles } from "material-ui/styles";
import { getConsultant } from "../api/consultant";

const styles = theme => ({
  root: {
    width: "100%",
    //height: "100px",
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
});

class App extends Component {
  state = {
    consultant: undefined
  };

  componentDidMount() {
    getConsultant().then(consultant => this.setState({ consultant }));
  }

  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    const { classes, theme } = this.props;
    const { consultant } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Nav consultant={consultant} />
          <main className={classes.content}>
            <Router onChange={this.handleRoute}>
              <Home path="/" />
              <Party path="/party/" />
              <Profile path="/profile/" user="me" />
              <Profile path="/profile/:user" />
            </Router>
          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
