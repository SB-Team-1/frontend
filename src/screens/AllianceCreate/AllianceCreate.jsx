import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import MainButton from "../../components/Buttons/MainButtonSmall";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
  },
  form: {
    display: "flex",
    flexFlow: "column wrap",
    width: "50vw",
    margin: "0 auto",
  },
  input: {},
}));

export default function AllianceCreate(props) {
  const classes = useStyles();
  const { handleCreate } = props;
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    slogan: "",
    description: "",
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
    <div className={classes.root}>
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
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
          label="Location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          color="primary"
        />
        <TextField
          className={classes.input}
          variant="filled"
          label="Slogan"
          name="slogan"
          required
          value={formData.slogan}
          onChange={handleChange}
          color="primary"
        />
        <TextField
          className={classes.input}
          variant="filled"
          label="Description"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          color="primary"
        />
        <MainButton type="submit">Create</MainButton>
      </form>
    </div>
  );
}
