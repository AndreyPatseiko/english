import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { Route } from "react-router-dom";
import DrawerList from "./DrawerList/DrawerList";
import PhoneticsCons from "./lessons/1_Phonetics/Consonant/Consonant";
import PhoneticsVowel from "./lessons/1_Phonetics/Vowel/Vowel";

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

export default function Main({ history }) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, left: open });
  };

  return (
    <div>
      {/* ──── App bar ─────────────────────────────────────────────────────────────────────────── */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            It's English, MTF!
          </Typography>
        </Toolbar>
      </AppBar>

      {/* ──── Drawer ──────────────────────────────────────────────────────────────────────────── */}
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        <DrawerList history={history} toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* ──── Routers ─────────────────────────────────────────────────────────────────────────── */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/phonetics/consonant" component={PhoneticsCons} />
        <Route path="/phonetics/vowel" component={PhoneticsVowel} />
      </main>
    </div>
  );
}
