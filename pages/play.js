import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { CenterContainer } from "../components/CenterContainer";
import { Game } from "../components/game";
import { getWords } from "./api/getWords";

export default function Play() {
  const [players, setPlayers] = useState();
  const [turn, setTurn] = useState(1);

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.data) {
      try {
        const parsed = JSON.parse(router?.query?.data);
        setPlayers(parsed);
      } catch (e) {
        router.push("start");
      }
    }
  }, [router]);

  useEffect(() => {
    const winner = players?.find((item) => item?.correct > 9);
    //  route to winner player and play again

    return winner && alert("Winnnnnnner", winner.name);
  }, [players]);

  const updatePlayerScore = (score) => {
    const index = turn - 1;

    const blah = players.map((item) => {
      if (turn === item.id) {
        return {
          ...item,
          correct: players[index].correct + score,
          tries: players[index].tries - 1,
        };
      }
      return item;
    });

    setPlayers(blah);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.userInput) {
      errors.userInput = "Required";
    } else if (values.userInput.length > 100) {
      errors.userInput = "Maximum is 100 characters";
    } else if (values.userInput.split(",").length > 6) {
      errors.userInput = "Maximum of 5 comma separation";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      userInput: "",
    },
    validate,
    onSubmit: async (values) => {
      const words = await getWords(
        values.userInput.split(",").map((word) => word.trim())
      );
      updatePlayerScore(words.matchedWords.length);
      setTurn((prev) => {
        if (prev > players.length - 1) return 1;
        return prev + 1;
      }); // if player's tries === 0 then skip
      formik.resetForm();
    },
  });

  if (!players) {
    return "loading";
  }

  if (players < 2 || players > 4) {
    return "Incorrect player amount";
  }

  return (
    <CenterContainer>
      <Game formik={formik} players={players} turn={turn} />
    </CenterContainer>
  );
}
