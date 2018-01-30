import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Hidden from "material-ui/Hidden";
import Divider from "material-ui/Divider";
import MenuIcon from "material-ui-icons/Menu";
import Links from "./links";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.grey,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerHeader: { ...theme.mixins.toolbar },
  drawerLogo: {
    display: "block",
    margin: "auto",
    padding: "20px"
  },
  drawerPaper: {
    width: 250,
    //height: "100%"
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "relative"
    }
  }
});

class Nav extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    console.log("drawer toggle");
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, consultant } = this.props;
    console.log(theme);
    console.log("consultant2", consultant);
    const drawer = (
      <div className={classes.drawer}>
        <div className={classes.drawerHeader}>
          <Link href="/">
            <img
              className={classes.drawerLogo}
              src="assets/steeped-tea-logo.svg"
              height="150"
            />
          </Link>
        </div>
        <Links />
      </div>
    );

    return (
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" noWrap>
              Hello {consultant && consultant.Person_ContactInfo.Email}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            classes={{ paper: classes.drawerPaper }}
            containerStyle={{ height: "calc(100% - 64px)", top: 64 }}
            onClose={this.handleDrawerToggle}
            ModalProps={
              { keepMounted: true } // Better open performance on mobile.
            }
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{ paper: classes.drawerPaper }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Nav);
