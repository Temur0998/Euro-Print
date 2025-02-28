import React from 'react';
import {Box, Typography, Grid, IconButton, MenuItem, Select, Container} from '@mui/material';
import {Instagram, Facebook, Telegram, YouTube, LocalPhone, Room} from '@mui/icons-material';

function Main7() {
    return (
        <Box
            sx={{
                backgroundColor: '#131A22',
                color: 'white',
                height: '550px',
                marginTop: '15px',
                padding: '40px'
            }}
        >
            <Container
                sx={{
                    marginTop: '35px'
                }}>
                {/* Grid layout */}
                <Grid container spacing={4}>
                    {/* Kompaniya bo‘limi */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6" fontWeight="bold">Kompaniya</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Biz haqimizda</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Mahsulotlar</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Xizmatlar</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Bizning mijozlar</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Bizning jamoa</Typography>
                    </Grid>

                    {/* Xizmatlar bo‘limi */}
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6" fontWeight="bold">Xizmatlar</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Ipakli bosma</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Ofset bosma</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Kesis</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Ultra-binafsha rang</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Bo‘rtirish</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Laminatsiya</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Qog‘oz kashirovka</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>O‘yib olish</Typography>
                    </Grid>

                    {/* Mijozlar uchun */}
                    <Grid item xs={12} sm={5}>
                        <Typography variant="h6" fontWeight="bold">Mijozlar uchun</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Rahbariyat</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Tarix</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Yangiliklar</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Maketlar uchun talab</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '20px'}}>Aloqa</Typography>
                    </Grid>

                    {/* Aloqa */}
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" fontWeight="bold">Aloqa</Typography>
                        <Typography sx={{fontSize: '13px', marginTop: '35px'}}><LocalPhone
                            sx={{color: 'orange', fontSize: '15px'}}/> (+99891) <br/> <p
                            style={{fontSize: '25px', marginTop: '-5px'}}>2041100</p></Typography>
                        <Typography sx={{fontSize: '13px'}}><LocalPhone
                            sx={{color: 'orange', fontSize: '15px'}}/> (+99890) <br/> <p
                            style={{fontSize: '25px', marginTop: '-5px'}}>3607700</p></Typography>
                        <Typography sx={{fontSize: '13px'}}><LocalPhone
                            sx={{color: 'orange', fontSize: '15px'}}/> (+99890) <br/> <p
                            style={{fontSize: '25px', marginTop: '-5px'}}>2831100</p></Typography>
                    </Grid>
                </Grid>

                {/* Til tanlash va ijtimoiy tarmoqlar */}
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                    <select
                        style={{
                            padding: '5px',
                            border: '1px solid white',
                            borderRadius: '50px',
                            backgroundColor: 'transparent',
                            color: 'white',
                            outline: 'none',
                            fontSize: '16px',
                            cursor: 'pointer',
                        }}>
                        <option style={{backgroundColor: 'black'}} value="Uzbekcha">Uzbekcha</option>
                        <option style={{backgroundColor: 'black'}} value="Russian">Russian</option>
                    </select>
                    <Box sx={{marginLeft: '-350px'}}>
                        <IconButton sx={{
                            color: 'white',
                            marginLeft: '-245px',
                            backgroundColor: '#646161',
                            width: '30px',
                            height: '30px'
                        }}><Telegram/></IconButton>
                        <IconButton sx={{
                            color: 'white',
                            marginLeft: '25px',
                            backgroundColor: '#646161',
                            width: '30px',
                            height: '30px'
                        }}><Instagram/></IconButton>
                        <IconButton sx={{
                            color: 'white',
                            marginLeft: '25px',
                            backgroundColor: '#646161',
                            width: '30px',
                            height: '30px'
                        }}><Facebook/></IconButton>
                        <IconButton sx={{
                            color: 'white',
                            marginLeft: '25px',
                            backgroundColor: '#646161',
                            width: '30px',
                            height: '30px'
                        }}><YouTube/></IconButton>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize: '13px',}}><Room sx={{color: 'orange', fontSize: '15px'}}/>
                            140100 <br/>
                            <p style={{fontSize: '15px', marginTop: '-15'}}>
                                O‘zbekiston R, Farg‘ona <br/>
                                viloyati, Qo‘qon sh. <br/>
                                Usta bozor k, 1B uy. <br/>
                            </p>
                        </Typography>
                    </Box>
                </Box>

                {/* Copyright */}
                <Typography mt={4} ml={-75} textAlign="center" sx={{fontSize: '15px'}}>© 2005 - 2019 europrint.uz
                    tipografiyasi | Personal Development
                    Process</Typography>
            </Container>
        </Box>
    );
}

export default Main7;
