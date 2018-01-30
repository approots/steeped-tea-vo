import { h, Component } from "preact";
import { Link } from "preact-router/match";
import { withStyles } from "material-ui/styles";
import List from "material-ui/List";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/MoveToInbox";
import DraftsIcon from "material-ui-icons/Drafts";
import StarIcon from "material-ui-icons/Star";
import SendIcon from "material-ui-icons/Send";
import MailIcon from "material-ui-icons/Mail";
import DeleteIcon from "material-ui-icons/Delete";
import ReportIcon from "material-ui-icons/Report";

const styles = theme => ({
  links: {}
});

class Links extends Component {
  render({ classes }) {
    return (
      <List>
        <ListItem component={props => <Link href="/" {...props} />} button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={props => <Link href="/party" {...props} />} button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Party" />
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Links);
