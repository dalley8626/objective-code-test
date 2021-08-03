import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { CenterContainer } from "../components/CenterContainer";
import { Fake } from "../components/Fake";
import { Winner } from "../components/Winner";

export default function Page() {
  const router = useRouter();

  return (
    <CenterContainer>
      {router.query.name ? <Winner name={router.query.name} /> : <Fake />}
    </CenterContainer>
  );
}
