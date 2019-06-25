import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// Constants
import navList from "./DrawerList.constants";
// Styles
import useStyles from "./DrawerList.styles";

export default ({ history, toggleDrawer }) => {
  const classes = useStyles();
  const {
    location: { pathname }
  } = history;

  const [openId, setOpen] = React.useState(
    pathname.substr(0, pathname.lastIndexOf("/"))
  );

  const collapseTrigger = id => {
    setOpen(openId === id ? null : id);
  };

  return (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List component="nav" aria-labelledby="nested-list-subheader">
        {navList.map(item => {
          const { insertNav } = item;
          if (!insertNav) {
            return (
              <ListItem
                key={item.title}
                button
                selected={history.location.pathname === item.path}
                onClick={() => {
                  history.push(item.path);
                }}
              >
                {item.icon ? (
                  <ListItemIcon className={classes.listIcon}>
                    {item.icon}
                  </ListItemIcon>
                ) : null}
                <ListItemText primary={item.title} />
              </ListItem>
            );
          } else {
            return (
              <div key={item.title}>
                <ListItem
                  button
                  onClick={() => collapseTrigger(item.parentPath)}
                >
                  {item.icon ? (
                    <ListItemIcon className={classes.listIcon}>
                      {item.icon}
                    </ListItemIcon>
                  ) : null}
                  <ListItemText primary={item.title} />
                  {openId === item.title ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse
                  in={openId === item.parentPath}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    onClick={toggleDrawer(false)}
                  >
                    {insertNav.map(navItem => (
                      <ListItem
                        key={navItem.title}
                        button
                        className={classes.nested}
                        selected={history.location.pathname === navItem.path}
                        onClick={() => {
                          history.push(navItem.path);
                        }}
                      >
                        <ListItemText primary={navItem.title} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            );
          }
        })}
      </List>
    </div>
  );
};
