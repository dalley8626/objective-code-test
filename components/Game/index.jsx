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
        width: "100%",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Be the champion</h1>
      </div>

      <div>
        <h2 style={{ textAlign: "center" }}>Players: {players.length} / 4</h2>
      </div>

      <div style={{ margin: 30 }}>
        <h2 style={{ textAlign: "center" }}>Player&apos;s {turn} turn </h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: 1,
        }}
      >
        {players.map(({ id, correct, tries }) => (
          <div key={id}>
            <h3>Player {id}</h3>
            <div>
              <p>Correctness {correct}</p>
              <p>tries {tries}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          margin: 100,
        }}
      >
        <GameForm formik={formik} />
      </div>
    </div>
  );
};
