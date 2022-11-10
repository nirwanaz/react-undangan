import React from "react";

import {
    Container,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
    Box,
    Typography,
    Tabs,
    Tab,
    Stack
} from "@mui/material";


const catalogs = [...new Array(12)]

export default function Catalog() {

    const [value, setValue] = React.useState(0);
    const [numberItemShown, setNumberItemShown] = React.useState(4);
    const [showMr, setShowMr] = React.useState(true);
    const [showLs, setShowLs] = React.useState(false);
    
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const showMore = () => {
        let numberToIncrementBy = 4;
        let result = numberItemShown + numberToIncrementBy;

        if (result < catalogs.length) {
            setNumberItemShown(result)
            setShowLs(true)
        } else {
            setNumberItemShown(catalogs.length)
            setShowMr(false)
            setShowLs(true)
        }
    }

    const showLess = () => {
        let numberToDecrementBy = 4;
        let numberShown = numberItemShown - numberToDecrementBy

        if (numberShown > 4 && numberShown <= catalogs.length) {
            setNumberItemShown(numberShown)
            setShowMr(true)
        } else {
            setNumberItemShown(numberShown)
            setShowMr(true)
            setShowLs(false)
        }
    };

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                py: { xs: '50px', sm: '70px', md: '100px' }
            }}
        >
            <Container >
                <Box
                    component="div"
                    sx={{
                        width: '100%',
                        bgColor: 'background.paper'
                    }}
                >
                    <Typography variant="h3" color="inherit" align="center">
                        Templates
                    </Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="tab-catalog" centered>
                        <Tab label="Standard" />
                        <Tab label="Minisite" />
                    </Tabs>

                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        justifyItems="center"
                        paddingY={3}
                    >
                        {catalogs.slice(0, numberItemShown).map((val, index) => (
                            <Grid item sm={4} md={3} key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="500"
                                            title="media1"
                                            image="https://asset.menica.pro/menicav4/ThumbnailBig/Demofoto1x.png"
                                            alt={`media ${index++}`}
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="initial" textAlign="center">
                                                Media {index}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button variant="contained" sx={{ backgroundColor: "#FF9F9F", width: '100%' }}>
                                            preview media {index}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        {showLs ? (
                            <Button variant="outlined" onClick={showLess}>
                                Show Less
                            </Button>
                        ) : ''}

                        {showMr ? (
                            <Button variant="outlined" onClick={showMore}>
                                Show More
                            </Button>
                        ) : ''}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}