import React from "react";

export const Game = ({ players, turn, formik }) => {
  return (
    <div>
      <h1>Words</h1>
      <p>Player turn {turn}</p>
      {players.map((item) => (
        <div key={item.id}>
          <p>
            Player {item.id} Correctness {item?.correct ? item.correct : 0}{" "}
            tries {item?.tries ? item.tries : 10}
          </p>
        </div>
      ))}
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
    </div>
  );
};
