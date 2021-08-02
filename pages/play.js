import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { CenterContainer } from "../components/centerContainer";
import { getWords } from "./api/getWords";

export default function Play() {
  const [players, setPlayers] = useState();
  const [userInput, setUserInput] = useState();
  // const [words, setWords] = useState();
  // should be set player correctness

  const [turn, setTurn] = useState();

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.data) {
      try {
        const parsed = JSON.parse(router?.query?.data);
        console.log("parsed", parsed);
        setPlayers(parsed);
      } catch (e) {
        router.push("start");
      }
    }
  }, [router]);

  if (!players) {
    return "loading";
  }

  const submit = async (e) => {
    e.preventDefault();
    const words = await getWords(userInput.split(","));
    console.log("words", words);

    setWords(words);

    // should also change turn to the next person
  };

  if (players < 2 || players > 4) {
    return "Incorrect player amount";
  }

  return (
    <CenterContainer>
      <form onSubmit={(e) => submit(e)}>
        <label>Words</label>
        <input onChange={(e) => setUserInput(e.target.value)} maxLength={100} />
        <button type="submit">Submit</button>
      </form>
    </CenterContainer>
  );
}
