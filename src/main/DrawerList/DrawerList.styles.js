import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
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
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  listIcon: {
    minWidth: "36px"
  }
}));
