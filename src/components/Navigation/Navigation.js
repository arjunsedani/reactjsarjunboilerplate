/* eslint-disable react/no-multi-comp */
import React from "react";
import { matchPath } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { List } from "@material-ui/core";
import useRouter from "../../hooks/useRouter";
import { NavigationListItem } from "./components";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  }
}));

const reduceChildRoutes = props => {
  const { router, items, page, depth } = props;

  const InnerNavigationList = props => {
    const { parentTitle, pages, ...rest } = props;
    // const rolePages = pages;

    // const rolePages = pages.filter(page => page);
    const roles = useSelector(state => state.currentUser);
    const rolePages = pages.filter(
      page =>
        roles &&
        roles.user &&
        roles.user.content.RoleData.Features.filter(
          x => x.Name === parentTitle
        )[0].Permissions.includes(page.tag)
    );
    return (
      <List>
        {rolePages.reduce(
          (items, page) => reduceChildRoutes({ items, page, ...rest }),
          []
        )}
      </List>
    );
  };

  InnerNavigationList.propTypes = {
    depth: PropTypes.number,
    pages: PropTypes.array
  };

  if (page.children) {
    const open = matchPath(router.location.pathname, {
      path: page.href,
      exact: false
    });

    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
      >
        <InnerNavigationList
          parentTitle={page.title}
          depth={depth + 1}
          pages={page.children}
          router={router}
        />
      </NavigationListItem>
    );
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
      />
    );
  }

  return items;
};

const NavigationList = props => {
  const { pages, ...rest } = props;

  return (
    <List>
      {pages.reduce(
        (items, page) => reduceChildRoutes({ items, page, ...rest }),
        []
      )}
    </List>
  );
};

NavigationList.propTypes = {
  depth: PropTypes.number,
  pages: PropTypes.array
};

const Navigation = props => {
  const { pages, className, component: Component, ...rest } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
    <Component {...rest} className={clsx(classes.root, className)}>
      <NavigationList depth={0} pages={pages} router={router} />
    </Component>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  component: PropTypes.any,
  pages: PropTypes.array.isRequired
};

Navigation.defaultProps = {
  component: "nav"
};

export default Navigation;
