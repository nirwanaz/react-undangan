import { Container, Grid, Box, Typography, Stack, Avatar, Button } from "@mui/material";
import React from "react";

import './index.css'

import borderLU from "./images/border-atas.png"
import borderRB from "./images/border-bawah.png"
import bungaSampul from "./images/bunga-sampul.gif"
import shapeBunga from "./images/shape-bunga.png"
import male from "./images/male.png"
import female from "./images/female.png"
import love from "./images/love.png"
import flower from "./images/bunga-gerak.gif"

const data = {
  brideName: "Juliette",
  groomName: "Romeo",
  bannerTitle: "The Wedding Of",
  timeEvent: "Sabtu, 12 November 2022",
  events: [
    {
      name: 'Akad',
      dateStart: '20 November 2022 07:00:00',
      dateEnd: '20 November 2022 08:00:00',
      place: 'Hotel Crown',
    },
    {
      name: 'Resepsi',
      dateStart: '20 November 2022 10:00:00',
      dateEnd: '20 November 2022 12:00:00',
      place: 'Hotel Crown',
    }
  ]
}

const Cappucino = () => {
  const formatDate = (date, type) =>{
    const d = new Date(date).toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' }).split(' ')

    switch(type) {
      case 'd':
        return d[1]
      case 'm':
        return d[2]
      case 'y':
        return d[3]
      case 't':
        return d[4]
      default:
        return d[0].substring(0, d[0].length - 1)
    }
  }

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: "#9f939742", padding: "0 !important" }}>
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
        <Container>
          <Grid container justifyContent="center">
            <Grid item sm textAlign="center">
              <Box
                component="div"
                className="content-cover"
              >
                <Typography
                  variant="subtitle1"
                  color="initial"
                  paddingY=".5rem"
                  fontSize={36}
                >
                  { data.bannerTitle }
                </Typography>
                <img src={bungaSampul} alt="sampul" />
                <Stack
                  padding={3}
                >
                  <Typography variant="h3" color="initial">
                    { data.groomName }
                  </Typography>
                  <Typography variant="h3" color="initial">
                    &amp;
                  </Typography>
                  <Typography variant="h3" color="initial">
                    { data.brideName }
                  </Typography>
                </Stack>
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
      {/* section */}
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
            <Grid item sm textAlign="center">
              <Box
                component="div"
                className="content-cover"
              >
                <img 
                  src={shapeBunga} 
                  alt="shape bunga"
                  className="imgTitle"  
                />
                <Typography variant="subtitle1" color="initial" paddingY=".5em" fontSize={36}>
                  MEMPELAI
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  paddingY="1.5em"
                >
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
                <Stack>
                  <Box
                    component="div"
                  >
                    <Typography variant="h3" color="initial" paddingBottom=".25em">
                      {data.groomName}
                    </Typography>
                    <Typography variant="body1" color="initial" paddingY=".25em">
                      Putra dari Bapak dan Ibu
                    </Typography>
                    <Box
                      component="span"
                    >
                      instagaram
                    </Box>
                    <Typography variant="body2" color="initial">
                      detail information
                    </Typography>
                  </Box>
                  <Box
                    component="span"
                    paddingY=".5em"
                  >
                    <img
                      src={love}
                      alt="love, like"
                      width={24}
                      height={24}
                    />
                  </Box>
                  <Box
                    component="div"
                  >
                    <Typography variant="h3" color="initial" paddingBottom=".25em">
                      {data.brideName}
                    </Typography>
                    <Typography variant="body1" color="initial" paddingY=".25em">
                      Putra dari Bapak dan Ibu
                    </Typography>
                    <Box
                      component="span"
                    >
                      instagaram
                    </Box>
                    <Typography variant="body2" color="initial">
                      detail information
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* section events*/}
      <Box
        component="section"
        sx={{
          position: "relative",
          height: "auto",
        }}
        className="events-section"
      >
        <div className="shape">
          <img src={borderLU} alt="border-l-u" />
          <img src={borderRB} alt="border-r-b" />
        </div>
        <Container maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item sm textAlign="center">
              <Box
                component="div"
                className="content-cover"
              >
                <Box
                  component="span"
                >
                  <img src={flower} alt="bunga gerak" width={60} height={60} />
                </Box>
                <Typography variant="h3" color="initial" paddingY=".5em" fontSize={36}>
                  Our Wedding Event
                </Typography>
                <Typography
                  variant="body2"
                  color="initial"
                  padding={2}
                  textAlign="justify"
                >
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami atas kehadiran
                  Bapak/Ibu/Saudara untuk memberikan doa restu kepada putra putri kami
                </Typography>
                {data.events.map((event, index) => (
                  <Box
                    component="div"
                    className="event-content"
                    key={index}
                    sx={{
                      paddingY: "1.5em"
                    }}
                  >
                    <Typography variant="h4" color="initial">
                      {event.name}
                    </Typography>
                    <Box
                      component="div"
                      sx={{
                        paddingY: ".5em",
                        marginY: ".25em",
                      }}
                    >
                      <Typography variant="body2" color="initial">
                        {formatDate(event.dateStart, 'm')}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Typography
                          variant="body2"
                          color="initial"
                          borderTop="2px solid black"
                          borderBottom="2px solid black"
                        >
                          {formatDate(event.dateStart, 'w')}
                        </Typography>
                        <Typography variant="h3" color="initial">
                          {formatDate(event.dateStart, 'd')}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="initial"
                          borderTop="2px solid black"
                          borderBottom="2px solid black"
                        >
                          {formatDate(event.dateStart, 'y')}
                        </Typography>
                      </Stack>

                    </Box>
                    <Typography variant="body2" color="initial">
                      {`${formatDate(event.dateStart, 't')} - ${formatDate(event.dateEnd, 't')}`}
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                      {event.place}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Tambahkan ke kalender
                    </Button>
                    
                  </Box>
                ))}
                
                
              </Box>
              
            </Grid>
          </Grid>
        </Container>

      </Box>
      {/* section */}
    </Container>
  )
}

export default Cappucino