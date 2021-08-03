import { Button } from "@material-ui/core";
import React from "react";

export const PlayerSelection = ({ participations, startGame }) => (
  <div style={{ flex: 1 }}>
    <div style={{ margin: 50 }}>
      <h1>How many players will be playing?</h1>
    </div>

    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      {participations.map((participate, i) => (
        <div
          style={{
            flex: 1,
            margin: 10,
          }}
          key={i}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => startGame(participate)}
            fullWidth
          >
            {participate}
          </Button>
        </div>
      ))}
    </div>
  </div>
);
