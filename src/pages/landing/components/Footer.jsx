import React from "react";
import {
    Box,
    Grid,
    Container,
    Typography,
    Stack,
    IconButton
} from "@mui/material"

import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    WhatsApp as WhatsAppIcon
} from "@mui/icons-material"

const icons = [<FacebookIcon />, <InstagramIcon />, <TwitterIcon />, <WhatsAppIcon />];

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(to right, #FF9F9F, #FF9F)'
            }}
        >
            <Box
                component="div"
                className="custom-shape-divider-footer"
            >
                <svg 
                    data-name="Layer 2" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1200 120" 
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        className="shape-fill-footer"
                    >

                    </path>
                </svg>
            </Box>
            <Container maxWidth="md">
                <Grid
                    container
                    className="banner"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        minHeight: {md: '100vh' },
                    }}
                >
                    <Grid item md={8}>
                        <Box
                            component="div"
                        >
                            <Typography
                                variant="h1"
                                className="text-gradient"
                            >
                                Welcome 
                            </Typography>
                            <Typography
                                variant="subtitle1"

                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aliquam venenatis ultricies est. Nullam et sem laoreet metus laoreet semper at id quam. 
                                Proin commodo nec diam eget auctor. Nulla blandit efficitur blandit. 
                                Vestibulum sit amet mauris maximus, mollis leo a, ultrices mi. 
                                Morbi lorem nisi, consequat eget felis vitae, sollicitudin iaculis enim. 
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item md={4}>
                        <Box
                            component="div"
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2020/07/31/16/07/card-5453422_960_720.png"
                                alt="banner"
                                height="300"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Stack
                            spacing={2}
                            direction="row"
                            justifyContent="center"
                        >
                            {icons.map((icon, index) => (
                                <IconButton
                                    key={index}
                                    color="error"
                                    sx={{
                                        backgroundColor: '#fff',
                                        '&:hover': { backgroundColor: 'hsl(0deg 0% 13%)' }
                                    }}                                    
                                >
                                    {React.cloneElement(icon, {
                                        sx: { fontSize: 36 }
                                    })}
                                </IconButton>
                            ))}

                        </Stack>
                    </Grid>
                </Grid>
            </Container>
            
        </Box>
    )
}