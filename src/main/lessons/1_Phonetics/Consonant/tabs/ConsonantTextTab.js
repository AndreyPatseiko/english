import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import rows from "../files/rows";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  }
}));

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Знак</TableCell>
              <TableCell>Слово</TableCell>
              <TableCell>Транскрипция</TableCell>
              <TableCell>Аудио</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.symbol}>
                <TableCell component="td">{row.symbol}</TableCell>
                <TableCell component="td">{row.word}</TableCell>
                <TableCell component="td">{row.transcription}</TableCell>
                <TableCell component="td">
                  <audio controls src={row.audio} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
