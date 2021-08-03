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
    <div
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ margin: 50 }}>
        <h1 style={{ textAlign: "center" }}>Be the champion</h1>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>Players: {players.length} / 4</h2>
      </div>

      <div style={{ flex: 1, textAlign: "left", display: "flex" }}>
        {players.map((item) => (
          <div
            key={item.id}
            style={{ flex: 1, flexDirection: "row", border: 1, margin: 100 }}
          >
            <h3>Player {item.id}</h3>
            <div>
              <p>Correctness {item?.correct ? item.correct : 0}</p>
              <p>tries {item?.tries ? item.tries : 10}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Player&apos;s turn {turn}</h3>
      <GameForm formik={formik} />
    </div>
  );
};
