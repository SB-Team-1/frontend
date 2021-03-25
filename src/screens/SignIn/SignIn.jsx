import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "10vh",
  },
}));

export default function SignIn(props) {
  const { handleLogin } = props;
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };
  return (
    <div>
      <form
        className={classes.form}
        noValidate
        autoComplete="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          className="login-input"
          variant="filled"
          label="Email"
          name="email"
          type="email"
          autoFocus={true}
          required
          value={formData.email}
          onChange={handleChange}
          color="primary"
        />
        <TextField
          className="login-input"
          variant="filled"
          label="Password"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          color="primary"
        />
        <Button
          className="login-button"
          type="submit"
          label="Login!"
          variant="contained"
          color="primary"
        >
          Login!
        </Button>
      </form>
    </div>
  );
}
