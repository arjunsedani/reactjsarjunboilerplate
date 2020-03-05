import React, { Fragment, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Drawer } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import useRouter from "../../hooks/useRouter";
import Navigation from "../Navigation";
import navigationConfig from "./navigationConfig";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    overflowY: "auto"
  },
  content: {
    padding: theme.spacing(2)
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content"
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    marginTop: theme.spacing(2)
  },
  drawer: {
    width: 235,
    // position: "fixed",
    flexShrink: 0
  },
  appBar: {
    position: "relative"
  },
  toolbar: theme.mixins.toolbar
}));

const NavBar = props => {
  const { openMobile, onMobileClose, className, ...rest } = props;
  const roles = useSelector(state => state.currentUser);
  const filternavigationConfig = navigationConfig[0].pages.filter(
    nav =>
      roles &&
      roles.user &&
      roles.user.content.RoleData.Features.some(
        role => role.Name.toLowerCase() === nav.title.toLowerCase()
      )
  );
  // const filternavigationConfig = navigationConfig[0].pages.filter(nav => nav);
  const classes = useStyles();
  const router = useRouter();
  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.location.pathname]);

  const navbarContent = (
    <div className={classes.content}>
      <nav className={classes.navigation}>
        <Navigation
          component="div"
          pages={filternavigationConfig}
        />
      </nav>
    </div>
  );

  return (
    <Fragment>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          <div {...rest} className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          {...rest}
          className={classes.drawer}
          elevation={1}
        >
          <div className={classes.toolbar} />
          <div className={clsx(classes.root, className)}>
            {navbarContent}
          </div>
        </Drawer>
      </Hidden>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default NavBar;
