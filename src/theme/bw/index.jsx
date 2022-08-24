import { Container, Grid, Box, Typography, Stack, Avatar } from "@mui/material";
import React from "react";

import './index.css'

import borderLU from "./images/border-atas.png"
import borderRB from "./images/border-bawah.png"
import bungaSampul from "./images/bunga-sampul.gif"
import shapeBunga from "./images/shape-bunga.png"
import male from "./images/male.png"
import female from "./images/female.png"
import love from "./images/love.png"
import { grey } from "@mui/material/colors";

const data = {
  brideName: "Juliette",
  groomName: "Romeo",
  bannerTitle: "The Wedding Of",
  timeEvent: "Sabtu, 12 November 2022",
}

const Cappucino = () => {
  return (
    <Container maxWidth="sm">
      <Box
        component="section"
        sx={{
          position: "relative",
          height: "auto",
        }}
      >
        <div className="shape">
          <img src={borderLU} alt="border-l-u" />
          <img src={borderRB} alt="border-r-b" />
        </div>
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item sm={10} textAlign="center">
              <Box
                component="div"
                sx={{
                  margin: "50px 10px",
                  bgColor: grey[500],
                  border: "2px solid #fff"
                }}
                paddingY="3em"
              >
                <Typography variant="h3" color="initial">
                  { data.bannerTitle }
                </Typography>
                <img src={bungaSampul} alt="sampul" />
                <Typography variant="h2" color="initial">
                  { data.groomName }
                </Typography>
                <Typography variant="h2" color="initial">
                  &amp;
                </Typography>
                <Typography variant="h2" color="initial">
                  { data.brideName }
                </Typography>
                <Typography variant="subtitle1" color="initial">
                  { data.timeEvent }
                </Typography>
                <Typography variant="body1" color="initial" paddingY="0.25em">
                  Kepada Yth. Bapak/Ibu/Saudara
                </Typography>
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "yellow",
                    padding: ".25em"
                  }}
                >
                  Tamu Undangan
                </Box>
              </Box>
              
            </Grid>
          </Grid>
        </Container>

      </Box>
      <Box
        component="section"
        sx={{
          position: "relative",
          height: "auto",
        }}
      >
        <div className="shape">
          <img src={borderLU} alt="border-l-u" />
          <img src={borderRB} alt="border-r-b" />
        </div>
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item sm={10} textAlign="center">
              <Box
                component="div"
                sx={{
                  margin: "50px 10px",
                  bgColor: grey[500],
                  border: "2px solid #fff"
                }}
                paddingY="3em"
              >
                <img 
                  src={shapeBunga} 
                  alt="shape bunga"
                  className="imgTitle"  
                />
                <Typography variant="h5" color="initial" paddingY=".5em">
                  MEMPELAI
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                  <Avatar
                    alt="groomPhoto"
                    src={male}
                    sx={{ 
                      width: 86, 
                      height: 86, 
                      border: '2px solid gray', 
                      padding: '8px'
                    }}
                  />
                  <Avatar
                    alt="love, like"
                    src={love}
                  />
                  <Avatar 
                    alt="bridePhoto" 
                    src={female} 
                    sx={{ 
                      width: 86, 
                      height: 86, 
                      border: '2px solid gray', 
                      padding: '8px'
                    }}
                  />
                </Stack>
                <Typography variant="h1" color="initial"></Typography>
              </Box>
              
            </Grid>
          </Grid>
        </Container>

      </Box>
    </Container>
  )
}

export default Cappucino