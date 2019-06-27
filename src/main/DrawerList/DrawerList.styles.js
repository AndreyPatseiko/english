import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({ 
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
    justifyContent: "space-between"
  },
  listIcon: {
    minWidth: "36px"
  },
  menuCaption: {
    margin: 0,
    paddingLeft: "1em"
  }
}));
