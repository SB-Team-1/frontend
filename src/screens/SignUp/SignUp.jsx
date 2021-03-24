import { TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  form: {
    padding: "10vh",
  },
}));

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const {
    firstname,
    lastname,
    email,
    password,
    password_confirmation,
  } = formData;
  const classes = useStyles();
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <TextField
        className={classes.input}
        name="firstname"
        label="First Name"
        value={firstname}
        variant="filled"
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        name="lastname"
        label="Last Name"
        value={lastname}
        variant="filled"
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        name="email"
        label="Email"
        value={email}
        variant="filled"
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        name="password"
        label="Password"
        type="password"
        value={password}
        variant="filled"
        onChange={handleChange}
        required
      />
      <TextField
        className={classes.input}
        name="password_confirmation"
        label="Password Confirmation"
        type="password"
        value={password_confirmation}
        variant="filled"
        onChange={handleChange}
        required
      />
      <Button
        className={classes.submit}
        variant="contained"
        color="primary"
        type="submit"
      >
        Register!
      </Button>
    </form>
  );
}
