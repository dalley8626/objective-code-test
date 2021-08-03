import React from "react";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { Button } from "@material-ui/core";

export const Landing = () => {
  const router = useRouter();

  return (
    <div style={{ flex: 1, width: 400 }}>
      <div style={{ margin: 50 }}>
        <h1 style={{ textAlign: "center" }}>Game of words</h1>
      </div>

      <div>
        <Image src="/start.gif" alt="start" width={800} height={500} />
      </div>

      <div style={{ marginTop: 100 }}>
        <Button
          style={{ width: 400, height: 100 }}
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
