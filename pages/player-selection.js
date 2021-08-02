import { useRouter } from "next/dist/client/router";
import React from "react";
import { CenterContainer } from "../components/centerContainer";

const players = [
  { id: 1, name: "player1" },
  { id: 2, name: "player2" },
  { id: 3, name: "player3" },
  { id: 4, name: "player4" },
];

export default function PlayerSelection() {
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
      How many players will be playing?
      {participations.map((participate) => (
        <button key={participate.id} onClick={() => startGame(participate)}>
          {participate}
        </button>
      ))}
    </CenterContainer>
  );
}
