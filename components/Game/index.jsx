import React from "react";
import { useFormik } from "formik";
import { GameForm } from "./GameForm";
import { GameFormValidations } from "./validations";

export const Game = ({ players, turn, submit }) => {
  const formik = useFormik({
    initialValues: {
      userInput: "",
    },
    validate: GameFormValidations,
    onSubmit: async (values) => {
      await submit(values);
      formik.resetForm();
    },
  });

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
      <GameForm formik={formik} />
    </div>
  );
};
