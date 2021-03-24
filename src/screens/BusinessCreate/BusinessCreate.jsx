import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  input: {},
}));

export default function BusinessCreate(props) {
  const classes = useStyles();
  const { currentUser, handleCreate } = props;
  const [formData, setFormData] = useState({
    description: "",
    website: "",
    name: "",
    user: currentUser._id,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextField
        className={classes.input}
        variant="filled"
        label="Name"
        name="name"
        autoFocus={true}
        required
        value={formData.name}
        onChange={handleChange}
        color="primary"
      />
      <TextField
        className={classes.input}
        variant="filled"
        label="Website"
        name="website"
        autoFocus={true}
        required
        value={formData.website}
        onChange={handleChange}
        color="primary"
      />
      <TextField
        className={classes.input}
        variant="filled"
        label="Description"
        name="description"
        autoFocus={true}
        required
        value={formData.description}
        onChange={handleChange}
        color="primary"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
