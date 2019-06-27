import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Tabs
import ConsonantTextTab from "./ConsonantTable";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: "1em 2em"
  }
}));

export default function FullWidthTabs({ match }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ConsonantTextTab />
    </div>
  );
}
