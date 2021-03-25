import {
  makeStyles,
  TextField,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import MainButton from "../../components/Buttons/MainButtonSmall";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "10vh",
    paddingBottom: "25vh",
  },
  form: {
    marginTop: "2vh",
    display: "flex",
    flexFlow: "column wrap",
    width: "50vw",
    margin: "0 auto",
  },
  input: {},
}));

export default function BusinessCreate(props) {
  const classes = useStyles();
  const { currentUser, handleCreate } = props;
  const [formData, setFormData] = useState({
    description: "",
    website_url: "",
    name: "",
    address: "",
    phone_number: "",
    logo_url: "",
    // email: "",
    alliance: "",
    category: "",
    user_id: currentUser ? currentUser.id : "",
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

  const categoryOptions = [
    "Electronics",
    "Auto",
    "Food/Beverage",
    "Health/Fitness",
    "Apparel",
    "Furniture",
    "Sporting goods",
    "Home Improvement",
    "Misc",
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4">Create your business Profile</Typography>
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
          label="Website"
          name="website_url"
          required
          value={formData.website_url}
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
        <TextField
          className={classes.input}
          variant="filled"
          label="Address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          color="primary"
        />
        <FormControl required variant="filled">
          <InputLabel id="select-label">Category</InputLabel>
          <Select
            value={formData.category}
            name="category"
            onChange={handleChange}
            labelId="select-label"
          >
            {categoryOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={classes.input}
          variant="filled"
          label="Logo URL"
          name="logo_url"
          value={formData.logo_url}
          onChange={handleChange}
          color="primary"
          disabled
        />
        <TextField
          className={classes.input}
          variant="filled"
          label="Phone Number"
          name="phone_number"
          disabled
          value={formData.phone_number}
          onChange={handleChange}
          color="primary"
        />
        <TextField
          className={classes.input}
          variant="filled"
          label="Email"
          name="email"
          disabled
          value={formData.email}
          onChange={handleChange}
          color="primary"
        />
        <MainButton type="submit">Submit</MainButton>
      </form>
    </div>
  );
}
