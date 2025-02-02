/* eslint-disable react/display-name */
import React, { useState, forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { ListItem, Button, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import { useTranslation } from "react-i18next";

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(theme => ({
  item: {
    display: "block",
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    // color: theme.primaryColor,
    color: "#000",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%"
  },
  buttonLeaf: {
    // color: theme.primaryColor,
    color: "#000",
    padding: "10px 8px",
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover": {
      // color: theme.primaryColor
      color: "#000"
    },
    "&:active": {
      // color: theme.primaryColor
      color: "#000"
    },
    "&.depth-0": {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  icon: {
    color: theme.palette.icon,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  expandIcon: {
    marginLeft: "auto",
    height: 16,
    width: 16
  },
  label: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto"
  },
  active: {
    // color: theme.primaryColor,
    color: "#000",
    "&:active": {
      // color: theme.primaryColor
      color: "#000"
    },
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.primaryColor
    }
  }
}));

const NavigationListItem = props => {
  const {
    title,
    href,
    depth,
    children,
    icon: Icon,
    className,
    open: openProp,
    label: Label,
    ...rest
  } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(openProp);

  const handleToggle = () => {
    setOpen(open => !open);
  };

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft,
    color: "#000"
  };

  if (children) {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.item, className)}
        disableGutters
      >
        <Button className={classes.button} onClick={handleToggle} style={style}>
          {Icon && <Icon className={classes.icon} />}
          {title}
          {/* {t(`sidebarCommon.${title}`)} */}
          {/* {t(`sidebarCommon.${title}`)} */}
          {open ? (
            <ExpandLessIcon className={classes.expandIcon} color="inherit" />
          ) : (
            <ExpandMoreIcon className={classes.expandIcon} color="inherit" />
          )}
        </Button>
        <Collapse in={open}>{children}</Collapse>
      </ListItem>
    );
  } else {
    return (
      <ListItem
        {...rest}
        className={clsx(classes.itemLeaf, className)}
        disableGutters
      >
        <Button
          activeClassName={classes.active}
          className={clsx(classes.buttonLeaf, `depth-${depth}`)}
          component={CustomRouterLink}
          exact
          style={style}
          to={href}
        >
          {Icon && <Icon className={classes.icon} />}
          {/* {t(`sidebarCommon.${title}`)} */}
          {title}
          {Label && (
            <span className={classes.label}>
              <Label />
            </span>
          )}
        </Button>
      </ListItem>
    );
  }
};

NavigationListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavigationListItem.defaultProps = {
  depth: 0,
  open: false
};

export default NavigationListItem;
