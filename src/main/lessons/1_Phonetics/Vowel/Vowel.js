import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { rusAnalogs, withoutRusAnalogs } from "./files/rows";
import ConsonantTable from "../ConsonantTable";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: "1em 2em"
  }
}));

export default ({ match }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ConsonantTable
        rusAnalogs={rusAnalogs}
        withoutRusAnalogs={withoutRusAnalogs}
      />
    </div>
  );
}
