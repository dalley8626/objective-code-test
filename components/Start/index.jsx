import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { Button } from "@material-ui/core";

export const Start = () => {
  const router = useRouter();

  return (
    <div style={{ flex: 1 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Game of words</h1>
      </div>

      <div>
        <Image src="/start.gif" alt="start" width={800} height={500} />
      </div>

      <div style={{ marginTop: 30 }}>
        <Button
          fullWidth
          onClick={() => router.push("/player-selection")}
          variant="contained"
          color="primary"
        >
          Start now
        </Button>
      </div>
    </div>
  );
};
