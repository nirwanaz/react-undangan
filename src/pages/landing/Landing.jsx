import React from "react";
import {
    Container,
    Grid,
    Box,
    Typography,
    Stack,
    Icon,
    Button,
} from "@mui/material";
import {
    Send as SendIcon,
    Login as LoginIcon,
} from "@mui/icons-material";

import AppBar from "./components/HeaderBar"
import Catalog from "./components/Catalog"
import Footer from "./components/Footer"
import "./landing.css";

const features = [
    {
        title: 'No Expired',
        subtitle: 'Can Access all the time',
        icon: 'desktop_windows'
    },
    {
        title: 'Music',
        subtitle: 'Can Access all the time',
        icon: 'music_note'
    },
    {
        title: 'Gift',
        subtitle: 'Can Access all the time',
        icon: 'redeem'
    },
    {
        title: 'Send WA',
        subtitle: 'Can Access all the time',
        icon: 'send'
    },
    {
        title: 'No Expired',
        subtitle: 'Can Access all the time',
        icon: 'desktop_windows'
    },
    {
        title: 'Music',
        subtitle: 'Can Access all the time',
        icon: 'music_note'
    },
    {
        title: 'Gift',
        subtitle: 'Can Access all the time',
        icon: 'redeem'
    },
    {
        title: 'Send WA',
        subtitle: 'Can Access all the time',
        icon: 'send'
    },
];

function Landing() {

    return (
        <Container maxWidth={false} disableGutters={true}>
            <AppBar />
            <Box
                component="section"
                sx={{
                    position: "relative",
                    backgroundColor: "#FF9F9F",
                    backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_960_720.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "lighten",
                    py: { xs: '50px', sm: '70px', md: '100px' }
                }}
            >
                <Container >
                    <Grid
                        container
                        className="banner"
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            minHeight: { md: '120vh' },
                            marginTop: { md: '-72px' }
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
                                <Box
                                    component="div"
                                    sx={{
                                        my: 2,
                                        display: 'block'
                                    }}
                                >
                                    <Stack direction="row" spacing={2}>
                                        <Button
                                            variant="contained"
                                            startIcon={<SendIcon />}
                                        >
                                            Try it Now
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            startIcon={<LoginIcon />}
                                        >
                                            Login
                                        </Button>
                                    </Stack>
                                </Box>
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
                    </Grid>
                </Container>
                <Box
                    component="div"
                    className="custom-shape-divider-bottom-1667789128"
                >
                    <svg 
                        data-name="Layer 1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none"
                    >
                        <path 
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                            className="shape-fill"
                        >

                        </path>
                    </svg>
                </Box>
            </Box>

            <Box
                component="section"
                sx={{
                    py: { xs: '50px', sm: '70px', md: '100px' }
                }}
            >
                <Container >
                    <Box
                        component="div"
                        sx={{
                            background: 'linear-gradient(to right, #FF9F9F, #ebc8c8)',
                            borderRadius: '70px',
                        }}
                        paddingY={2}
                        paddingX={4}
                    >
                        <Grid
                            container
                            spacing={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item md={10} alignItems="center" alignContent="center">
                                <Typography variant="h4" color="initial" sx={{ paddingLeft: { md: '32px' } }}>
                                    Create ur invitation card Now.
                                </Typography>
                                <Typography variant="subtitle1" color="initial" sx={{ paddingLeft: { md: 'calc(3*32px)' } }}>
                                    and enjoy ur moments.
                                </Typography>
                            </Grid>
                            <Grid item md={2} alignContent="center" alignItems="center">
                                <Button variant="contained" color="primary" size="large">
                                    Get Now !
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>                 
                </Container>
            </Box>

            <Box
                component="section"
                sx={{
                    py: { xs: '50px', sm: '70px', md: '100px' }
                }}
            >
                <Container >
                    <Box
                        component="div"
                        padding={4}
                    >
                        <Typography variant="h3" color="initial" textAlign="center">
                            Features
                        </Typography>
                        <Typography variant="subtitle1" color="initial" textAlign="center">
                            more save and complete
                        </Typography>
                    </Box>
                    
                    <Box
                        component="div"
                        sx={{
                            background: 'linear-gradient(to right, #FF9F9F, #FF9F)',
                            borderRadius: 2
                        }}
                        paddingY={2}
                        paddingX={4}
                    >
                        <Grid
                            container
                            spacing={4}
                            justifyContent="center"
                            alignItems="center"
                        >
                            {features.map((feature, index) => (
                                index % 2 === 0 ?
                                (
                                    <Grid item md={6} alignItems="end" alignContent="end" key={index}>
                                        <Grid container spacing={2} alignContent="center" justifyContent="center">
                                            <Grid item md={10} alignItems="center" alignContent="center" margin="auto">
                                                <Typography variant="h6" color="initial" textAlign="right">
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="subtitle2" color="initial" textAlign="right">
                                                    {feature.subtitle}
                                                </Typography>
                                            </Grid>
                                            <Grid item md={2} alignItems="center" alignContent="center" margin="auto">
                                                <Icon 
                                                    sx={{
                                                        fontSize: '46px',
                                                        borderRadius: '50%',
                                                        border: '1px solid #fff',
                                                        background: '0 0',
                                                        padding: '.8rem',
                                                    }} 
                                                >
                                                    {feature.icon}
                                                </Icon>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Grid item md={6} alignItems="end" alignContent="end" key={index}>
                                        <Grid container spacing={2} alignContent="center" justifyContent="center">
                                            <Grid item md={2} alignItems="center" alignContent="center" margin="auto">
                                                <Icon 
                                                    sx={{
                                                        fontSize: '46px',
                                                        borderRadius: '50%',
                                                        border: '1px solid #fff',
                                                        background: '0 0',
                                                        padding: '.8rem',
                                                    }} 
                                                >
                                                    {feature.icon}
                                                </Icon>
                                            </Grid>
                                            <Grid item md={10} alignItems="center" alignContent="center" margin="auto">
                                                <Typography variant="h6" color="initial" textAlign="left">
                                                    {feature.title}
                                                </Typography>
                                                <Typography variant="subtitle2" color="initial" textAlign="left">
                                                    {feature.subtitle}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            ))}
                        </Grid>
                    </Box>                 
                </Container>
            </Box>
            <Catalog />
            <Footer />
            
        </Container>
    )
}

export default Landing