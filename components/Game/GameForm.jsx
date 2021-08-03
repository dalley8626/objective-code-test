import React from "react";

export const GameForm = ({ formik }) => (
  <form onSubmit={formik.handleSubmit}>
    <label>Words</label>
    {formik.errors.userInput ? <div>{formik.errors.userInput}</div> : null}

    <input
      id="userInput"
      name="userInput"
      onChange={formik.handleChange}
      value={formik.values.userInput}
      maxLength={100}
    />
    <button type="submit">Submit</button>
  </form>
);
