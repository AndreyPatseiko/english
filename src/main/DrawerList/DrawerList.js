import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

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
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.drawerHeader}>
        <Button
          variant="outlined"
          onMouseUp={toggleDrawer(false)}
          onMouseDown={() => {
            history.push("/");
          }}
        >
          Home
        </Button>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List style={{ padding: 0 }}>
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
                  <Icon className={classes.listIcon}>{item.icon}</Icon>
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
                    <Icon className={classes.listIcon}>{item.icon}</Icon>
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
