import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import AudioPlayerSimple from "../../components/AudioPlayerSimple";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto"
  },
  table: {
    marginTop: theme.spacing(3),
    width: "100%"
  },
  td: {
    padding: "5px",
    "&:nth-of-type(2)": {
      width: "105px",
      textAlign: "center"
    },
    "&:first-child": {
      width: "50px",
      textAlign: "center",
      whiteSpace: "nowrap"
    },
    "&:last-child": {
      width: "50px",
      textAlign: "center"
    }
  }
}));

export default function SimpleTable({ rusAnalogs, withoutRusAnalogs }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Don't have rus analogs.</p>
      <Paper className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.td}>Symbol</TableCell>
              <TableCell className={classes.td}>Example</TableCell>
              <TableCell className={classes.td}>Similarly</TableCell>
              <TableCell className={classes.td}>Audio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withoutRusAnalogs.map((row, i) => (
              <TableRow key={row.symbol}>
                <TableCell component="td" className={classes.td}>
                  {row.symbol}
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  <p style={{ margin: 0 }}>{row.word}</p>
                  <p style={{ margin: 0, whiteSpace: "nowrap" }}>
                    {row.transcription}
                  </p>
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  {row.rusSimilarly}
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  <AudioPlayerSimple audio={row.audio} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <p>With rus analogs.</p>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.td}>Symbol</TableCell>
              <TableCell className={classes.td}>Example</TableCell>
              <TableCell className={classes.td}>Similarly</TableCell>
              <TableCell className={classes.td}>Audio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rusAnalogs.map((row, i) => (
              <TableRow key={row.symbol}>
                <TableCell component="td" className={classes.td}>
                  {row.symbol}
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  <p style={{ margin: 0 }}>{row.word}</p>
                  <p style={{ margin: 0, whiteSpace: "nowrap" }}>
                    {row.transcription}
                  </p>
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  {row.rusSimilarly}
                </TableCell>
                <TableCell component="td" className={classes.td}>
                  <AudioPlayerSimple audio={row.audio} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
