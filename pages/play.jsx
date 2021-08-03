import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { CenterContainer } from "../components/CenterContainer";
import { Game } from "../components/game";
import { getWords } from "./api/getWords";

export default function Page() {
  const [players, setPlayers] = useState();
  const [turn, setTurn] = useState(1);

  const router = useRouter();

  useEffect(() => {
    if (router?.query?.data) {
      try {
        const parsed = JSON.parse(router?.query?.data);
        setPlayers(parsed);
      } catch (e) {
        router.push("/start");
      }
    }
  }, [router]);

  useEffect(() => {
    const winner = players?.find((item) => item?.correct > 9);
    //  find when everyone tries's run out

    if (winner) {
      router.push({ pathname: "/winner", query: { name: winner.name } });
    }
  }, [players, router]);

  useEffect(() => {
    players?.map((item) => {
      if (turn === item.id && item.tries < 1) {
        setTurn((prev) => prev + 1);
      }
    });
  }, [players, router, turn]);

  const updatePlayerScore = (score) => {
    const index = turn - 1; // lazy way

    const updatedPlayers = players.map((item) => {
      if (turn === item.id) {
        return {
          ...item,
          correct: players[index].correct + score,
          tries: players[index].tries - 1,
        };
      }
      return item;
    });

    setPlayers(updatedPlayers);
  };

  const submit = async (values) => {
    const words = await getWords(
      values.userInput.split(",").map((word) => word.trim())
    );
    updatePlayerScore(words.matchedWords.length);

    setTurn((prev) => {
      if (prev > players.length - 1) return 1;
      if (words.matchedWords.length < 1) return prev;

      return prev + 1;
    });
  };

  if (!players) {
    return "loading";
  }

  if (players.length < 2 || players.length > 4) {
    return "Incorrect player amount";
  }

  return (
    <CenterContainer>
      <Game players={players} turn={turn} submit={submit} />
    </CenterContainer>
  );
}
