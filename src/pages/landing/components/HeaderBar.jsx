import React from "react";
import PropTypes from 'prop-types';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Container,
    Button,
    Drawer,
    ListItem,
    List,
    Divider,
    ListItemText,
    ListItemButton,
    useScrollTrigger
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const pages = ['Templates', 'Bundling', 'About'];

function OnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    })

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        sx: {
            backgroundColor: trigger ? '#FF9F9F' : 'transparent'
        }
    })
}

OnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

export default function HeaderBar(props) {
    const  { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                IniUndanganmu
            </Typography>
            <Divider />
            <List>
                {pages.map((page) => (
                    <ListItem
                        key={page}
                        disablePadding
                    >
                        <ListItemButton sx={{ textAlign: 'center'}}>
                            <ListItemText primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <OnScroll {...props}>
                <AppBar component="nav" color="transparent">
                    <Container maxWidth="lg" disableGutters>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    display: { xs: 'none', sm: 'block' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >
                                Ini Undanganmu
                            </Typography>

                            <Box
                                sx={{ 
                                    flexGrow: 1, 
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'end'
                                }}
                            >
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        sx={{ my: 2, display: 'block', color: 'inherit' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            
                        </Toolbar>
                    </Container>

                </AppBar>
            </OnScroll>
            <Box
                component="nav"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}