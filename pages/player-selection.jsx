import { useRouter } from "next/dist/client/router";
import React from "react";
import { CenterContainer } from "../components/CenterContainer";
import { PlayerSelection } from "../components/PlayerSelection";

const players = [
  { id: 1, name: "player1", score: 0, correct: 0, tries: 10 },
  { id: 2, name: "player2", score: 0, correct: 0, tries: 10 },
  { id: 3, name: "player3", score: 0, correct: 0, tries: 10 },
  { id: 4, name: "player4", score: 0, correct: 0, tries: 10 },
]; // can be dynamic as well

export default function Page() {
  const router = useRouter();

  const participations = [2, 3, 4];

  const startGame = (maxPlayer) => {
    const amount = players.slice(0, maxPlayer); // removing last indexes based on maxPlayers

    return router.push({
      pathname: "play",
      query: { data: JSON.stringify(amount) },
    });
  };

  return (
    <CenterContainer>
      <PlayerSelection startGame={startGame} participations={participations} />
    </CenterContainer>
  );
}
