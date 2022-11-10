import React from "react";
import Container from "@mui/material/Container";
import { BaseCarousel } from "../../components/carousel/BaseCarousel";
import { BaseAlbum } from "../../components/album/BaseAlbum";
import { BaseModal } from "../../components/modal/BaseModal";

import { createTheme, Grid, responsiveFontSizes } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const Blue = ({ slides, items, img }) => {
  let theme = createTheme()
  theme = responsiveFontSizes(theme)

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <div className="opener__text">
              <h1>Romeo&amp;Juliette</h1>
            </div>
          </Grid>
          <Grid item sm={6}>
            <img src={`${img}&auto=format&fit=crop&w=500&q=60`} alt="img" />
          </Grid>
        </Grid>

        <BaseCarousel
          width={"100%"}
          slides={slides}
          interval={3000}
          indicators={true}
        />
        <BaseAlbum items={items} />
        <BaseModal img={img} />

      </Container>
    </ThemeProvider>
  )
}

export default Blue