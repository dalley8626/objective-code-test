import { Button, TextField } from "@material-ui/core";
import React from "react";

export const GameForm = ({ formik }) => (
  <form onSubmit={formik.handleSubmit}>
    <TextField
      id="userInput"
      name="userInput"
      onChange={formik.handleChange}
      value={formik.values.userInput}
      error={formik.touched.userInput && Boolean(formik.errors.userInput)}
      helperText={formik.touched.userInput && formik.errors.userInput}
      maxLength={100}
      fullWidth
    />
    <div style={{ margin: 20 }}></div>
    <Button color="primary" variant="contained" fullWidth type="submit">
      Submit
    </Button>
  </form>
);
