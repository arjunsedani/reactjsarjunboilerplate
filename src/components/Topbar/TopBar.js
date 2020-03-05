/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/styles";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  colors,
  Popper,
  Paper,
  ClickAwayListener,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  InputBase,
  Grow,
  MenuList,
  Divider
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import toplogo from "assets/arjunsedanilogo.png";
import useRouter from "../../hooks/useRouter";
import { colors as styleColors } from "../../style/styleSettings";
import Person from "@material-ui/icons/Person";
import allActions from "../../redux/actions";
import { useSelector } from "react-redux";
const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    // backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  appBars: {
    zIndex: 1300
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center"
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: "inherit"
  },
  searchInput: {
    flexGrow: 1,
    color: "inherit",
    borderColor: "inherit",
    "& input::placeholder": {
      opacity: 1,
      color: "inherit"
    }
  },
  selectLanguage: {
    color: "inherit",
    "&:before": {
      borderColor: "inherit"
    },
    "&:after": {
      borderColor: "inherit"
    }
  },
  typography1: {
    color: "white"
  },
  icon: {
    borderColor: "inherit",
    fill: "inherit"
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    // boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    width: "200px",
    padding: "5px 0",
    margin: "11px -141px 0px",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    // backgroundColor: whiteColor,
    backgroundClip: "padding-box"
  },
  dropdownItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    position: "relative",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    height: "100%",
    whiteSpace: "nowrap",
    minHeight: "unset"
  },
  popperNav: {
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "unset !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "50rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          // color: whiteColor + " !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
          }
        }
      }
    }
  },
  popperResponsive: {
    zIndex: "1200",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }
  }
}));

const TopBar = props => {
  const { onOpenNavBarMobile } = props;
  const userInfo = undefined;
  const classes = useStyles();
  const { history } = useRouter();
  const dispatch = useDispatch();
  const notificationsRef = useRef(null);
  const [language, setLanguage] = useState("en");
  const [notifications, setNotifications] = useState([]);
  const [, setOpenNotifications] = useState(false);
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };



  const handleLogout = () => {
    dispatch(allActions.userActions.setUser(undefined));
    history.push("/");
    // dispatch(logout());
  };

  const homeRedirect = () => {
    history.push("/loginsuccess");
    // dispatch(logout());
  };


  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };



  const onLanguageChange = e => {
    setLanguage(e.target.value);
    const language = e.target.value;
  };


  return (
    <AppBar
      position="fixed"
      className={clsx(classes.root, classes.appBars)}
      style={{ backgroundColor: styleColors.CLASSY_BLUE }}
    >
      <Toolbar>
        <img
          alt="Logo"
          style={{ width: "154px", height: "50px" }}
          src={toplogo}
        />

        <div className={classes.flexGrow} />
        <Hidden smDown>
          <InputLabel className={classes.selectLanguage}>Language</InputLabel>
          <FormControl variant="outlined" className={classes.selectLanguage}>
            <Select
              className={clsx(
                classes.select,
                classes.searchInput,
                classes.className
              )}
              value={language}
              onChange={event => onLanguageChange(event)}
            >
              <option value={"en"} color="inherit">
                En
              </option>
              <option value={"ar"}>Ar</option>
              <option value={"fr"}>Fr</option>
            </Select>
          </FormControl>
          {userInfo && (
            <Button
              className={classes.logoutButton}
              color="inherit"
              onClick={homeRedirect}
            >
              Home
            </Button>
          )}
        </Hidden>
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={notifications.length}
              classes={{ badge: classes.notificationsBadge }}
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div>
            {(
              <Button
                color="inherit"
                aria-label="Person"
                justIcon
                aria-owns={openProfile ? "profile-menu-list" : null}
                aria-haspopup="true"
                onClick={handleClickProfile}
                className={classes.buttonLink}
                muiClasses={{
                  label: ""
                }}
              >
                <Person
                  className={classes.headerLinksSvg + " " + classes.links}
                />
                <Hidden mdUp implementation="css">
                  <span
                    onClick={handleClickProfile}
                    className={classes.linkText}
                  >
                    {"Profile"}
                  </span>
                </Hidden>
              </Button>
            )}
            <Popper
              open={Boolean(openProfile)}
              anchorEl={openProfile}
              transition
              disablePortal
              placement="bottom"
              className={clsx({
                [classes.popperClose]: !openProfile,
                [classes.popperResponsive]: true,
                [classes.popperNav]: true
              })}
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list"
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Paper className={classes.dropdown}>
                    <ClickAwayListener onClickAway={handleCloseProfile}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={handleCloseProfile}
                          className={classes.dropdownItem}
                        >
                          {userInfo ? userInfo.given_name : ""}
                        </MenuItem>
                        <Divider light />
                        <MenuItem
                          onClick={handleCloseProfile}
                          className={classes.dropdownItem}
                        >
                          {"Profile"}
                        </MenuItem>
                        <MenuItem
                          onClick={handleCloseProfile}
                          className={classes.dropdownItem}
                        >
                          {"Settings"}
                        </MenuItem>
                        <Divider light />
                        <MenuItem
                          onClick={handleLogout}
                          className={classes.dropdownItem}
                        >
                          {"Log out"}
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
