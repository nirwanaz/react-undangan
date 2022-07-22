import React from "react";
import Container from "@mui/material/Container";
import { BaseCarousel } from "./components/carousel/BaseCarousel";
import { BaseCountdown } from "./components/countdown/BaseCountdown";

function App() {
  const slides = [
    "https://picsum.photos/id/1032/900/400",
    "https://picsum.photos/id/1033/900/400",
    "https://picsum.photos/id/1037/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1036/900/400",
  ]

  return (
    <Container maxWidth="md">
      <BaseCarousel
        width={1200}
        slides={slides}
        interval={2000}
        controls={true}
        indicators={true}
      />
      <BaseCountdown eventDay={new Date('27/07/2022').getTime()}/>
    </Container>
  );
}

export default App;
