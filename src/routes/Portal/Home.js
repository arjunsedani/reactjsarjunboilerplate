import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import NavBar from "components/NavBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopBar from "components/Topbar/TopBar";
import Error401 from "./Error401";
import Content from "components/Content";
import routes from "./routes";
import intersection from "lodash.intersection";
import { Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = React.useState(false);
  const roles = useSelector(state => state.currentUser);

  const filteredRoutes = routes.filter(route => {
    const matchedRouteName =
      roles &&
      roles.user &&
      roles.user.content.RoleData.Features.find(o => o.Name === route.feature);
    const matched = intersection(
      matchedRouteName && matchedRouteName.Permissions !== undefined
        ? matchedRouteName.Permissions
        : [],
      route.Permissions
    );

    if (matched.length > 0) {
      return route;
    }
  });


  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <NavBar
        className={classes.navBar}
        onMobileClose={handleNavBarMobileClose}
        openMobile={openNavBarMobile}
      />
      <Content fullscreen>
        <div className={classes.toolbar} />
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
          <Route component={Error401} />
        </Switch>
      </Content>
    </div>
  );
}
