import React from "react";
import Image from "next/image";
import { Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";

export const Fake = () => {
  const router = useRouter();

  return (
    <div style={{ flex: 1, width: 400 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Not a winner</h1>
      </div>

      <div>
        <Image src="/fake.gif" alt="start" width={800} height={500} />
      </div>

      <h3>You maybe have stumbled to a wrong winner page </h3>

      <div style={{ marginTop: 100 }}>
        <Button
          onClick={() => router.push("/start")}
          variant="contained"
          color="primary"
          fullWidth
        >
          Go to start
        </Button>
      </div>
    </div>
  );
};
