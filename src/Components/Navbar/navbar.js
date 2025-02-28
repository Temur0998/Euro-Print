import React, {useState, useEffect} from 'react';
import {Box, Container} from "@mui/material";
import {logo} from "../constants/constants";
import './navbar.css';
import Navbar2 from "./navbar2";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
            className={isScrolled ? 'navbar-scrolled' : ''}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '25px',
                }}

            >
                <img src={logo} alt="logo"/>

                <Navbar2/>
            </Container>
        </Box>
    );
}

export default Navbar;
