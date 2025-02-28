import React from 'react';
import {Container, Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Main1() {
    return (
        <Container
            sx={{
                marginTop: '10px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>

            <Box
                sx={{
                    width: '46%',
                    height: '295px',
                    display: 'inline-block',
                    marginTop: '55px',
                    marginLeft: '3%'
                }}>

                <Typography variant={'h4'} style={{fontSize: '27px', lineHeight: '1.7', marginLeft: '5px'}}>
                    Mahsulotlaringiz savdosi oshishini
                    xohlaysizmi? Unday bo'lsa, mahsulotingiz
                    qadog'ining zamonaviyligiga e'tibor bering.
                </Typography>
                <Typography varinat={'h4'} style={{fontSize: '25px', fontWeight: 'bold', marginTop: '15px'}}>
                    Zamonaviy qadoq uchun buyurtma bering!
                </Typography>

                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon/>}
                    style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        textTransform: 'none',
                        backgroundColor: '#F26522',
                        marginTop: '45px',
                        marginLeft: '5px'
                    }}>
                    Buyurtma berish
                </Button>
            </Box>


            <Box
                sx={{
                    width: '48%',
                    height: '350px',
                    display: 'inline-block',
                    marginLeft: '2%',
                }}>

                {/*Carusel uchun joy*/}

            </Box>

            <Container
                sx={{
                    marginTop: '45px',
                    padding: '5px',
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                <Box
                    sx={{
                        width: '200px',
                        height: '65px',
                    }}>

                    <Typography variant={'h6'} style={{fontSize: '13px', marginLeft: '45px'}}>
                        (+998-91)
                    </Typography>
                    <Typography variant={'h4'}>
                        204-11-00
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '200px',
                        height: '65px',
                        marginLeft: '35px',
                    }}>

                    <Typography variant={'h6'} style={{fontSize: '13px', marginLeft: '45px'}}>
                        (+998-90)
                    </Typography>
                    <Typography variant={'h4'}>
                        360-77-00
                    </Typography>
                </Box>

            </Container>
        </Container>
    )
}

export default Main1;