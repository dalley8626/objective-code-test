import React from "react";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";

export const Winner = ({ name }) => {
  const router = useRouter();
  return (
    <div style={{ flex: 1, width: 400 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Winner chicken dinner</h1>
      </div>

      <div>
        <Image src="/winner.gif" alt="start" width={800} height={500} />
      </div>

      <h1>Congrats {name}</h1>

      <div style={{ marginTop: 100 }}>
        <Button
          onClick={() => router.push("/player-selection")}
          variant="contained"
          color="primary"
          fullWidth
        >
          Start again
        </Button>
      </div>
    </div>
  );
};
