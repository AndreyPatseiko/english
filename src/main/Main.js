import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import TextFields from "@material-ui/icons/TextFields";
import MailIcon from "@material-ui/icons/Mail";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Phonetics from "./lessons/1_Phonetics/1_Phonetics";

const useStyles = makeStyles(theme => ({
  list: {
    width: 300
  },
  fullList: {
    width: "auto"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
}));

export default function Main() {
  const classes = useStyles();
  let [state, setState] = React.useState(false);
  let [open, setOpen] = React.useState(false);

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleClick = () => {
    // console.log(this.state)
    setOpen(!open);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="1. Фонетика" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/phonetics/consonant">
              <ListItem button className={classes.nested}>
                <ListItemText primary="Согластные" />
              </ListItem>
            </Link>

            <Link to="/phonetics/Vowel">
              <ListItem button className={classes.nested}>
                <ListItemText primary="Гласные" />
              </ListItem>
            </Link>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <TextFields />
          </ListItemIcon>
          <ListItemText primary="2. Запоминание слов" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* ──── App bar ─────────────────────────────────────────────────────────────────────────── */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer("left", true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Les №1
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ──── Drawer ──────────────────────────────────────────────────────────────────────────── */}
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>

      {/* ──── Content ─────────────────────────────────────────────────────────────────────────── */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/phonetics/consonant" component={Phonetics} />
      </main>
    </div>
  );
}
