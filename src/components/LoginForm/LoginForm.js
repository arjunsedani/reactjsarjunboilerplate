import React, { useState, useEffect } from "react";
import validate from "validate.js";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import allActions from "../../redux/actions";
import history from "../../AppHistory";
import { rolesData } from "../../mock_data/rolesData";

const schema = {
  username: {
    presence: { allowEmpty: false, message: "is required" }
  },
  password: {
    presence: { allowEmpty: false, message: "is required" }
  }
};

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%"
  }
}));

const LoginForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  //   const router = useRouter();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const [, setopenAlert] = useState(false);

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      dispatch(allActions.userActions.setUser(rolesData));
      history.push(`/loginsuccess`);
    } catch (e) {
      setopenAlert(true);
      throw e;
    }
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          error={hasError("username")}
          fullWidth
          helperText={
            hasError("username") ? formState.errors.username[0] : null
          }
          label="User Name"
          name="username"
          onChange={handleChange}
          value={formState.values.username || ""}
          variant="outlined"
        />
        <TextField
          error={hasError("password")}
          fullWidth
          helperText={
            hasError("password") ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ""}
          variant="outlined"
        />
      </div>
      <Button
        className={classes.submitButton}
        color="secondary"
        disabled={!formState.isValid}
        size="large"
        type="submit"
        variant="contained"
      >
        Sign in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string
};

export default LoginForm;
