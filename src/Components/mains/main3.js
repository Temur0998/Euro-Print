import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function Main3() {
    return (
        <Box
            sx={{
                backgroundColor: '#131A22',
                height: '800px',
                marginTop: '85px',
                textAlign: 'center',
            }}>

            <Typography variant={'h3'} style={{color: 'white', marginTop: '15px'}}>
                Nima Uchun Biz?
            </Typography>

            <Container
                sx={{
                    marginTop: '105px',
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>

                <Box
                    sx={{
                        width: '32%',
                        height: '230px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                    }}>

                    <img src="https://www.europrint.uz/assets/images/timer.png" alt="" className={'img1'}/>

                    <Typography variant={'h5'} style={{fontSize: '25px', marginTop: '15px'}}>
                        Samaradorlik
                    </Typography>
                    <Typography>
                        Buyurtmalarni bajarishda avtomatlashtirilgan zamonaviy texnologiya.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '230px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        marginLeft: '1.7%'
                    }}>

                    <img src="https://www.europrint.uz/assets/images/Group%2028.png" alt="" className={'img1'}/>

                    <Typography variant={'h5'} style={{fontSize: '25px', marginTop: '15px'}}>
                        Sifat
                    </Typography>
                    <Typography>
                        Buyurtmalar kompaniyaning tashqi va ichki sifat ko’rsatkichlarida tizimli ravishda o’z
                        laboratoriyamizda tekshirib boriladi.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '230px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        marginLeft: '1.7%'
                    }}>

                    <img src="https://www.europrint.uz/assets/images/Group%2029.png" alt="" className={'img1'}/>

                    <Typography variant={'h5'} style={{fontSize: '25px', marginTop: '15px'}}>
                        Qulay narx
                    </Typography>
                    <Typography>
                        Kompaniyamiz qadriyatlariga ko’ra, hamkorlikda ikkala taraf uchun ham manfaatlik ish olib
                        borish, bu hamkorlikni bardavomligi ta’minlavchi eng katta omilidir.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '230px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        marginLeft: '16%',
                        marginTop: '105px'
                    }}>

                    <img src="https://www.europrint.uz/assets/images/Group%2030.png" alt="" className={'img1'}/>

                    <Typography variant={'h5'} style={{fontSize: '25px', marginTop: '15px'}}>
                        Qulay narx
                    </Typography>
                    <Typography>
                        Kompaniyamiz qadriyatlariga ko’ra, hamkorlikda ikkala taraf uchun ham manfaatlik ish olib
                        borish, bu hamkorlikni bardavomligi ta’minlavchi eng katta omilidir.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '230px',
                        borderRadius: '5px',
                        backgroundColor: 'white',
                        marginLeft: '3%',
                        marginTop: '105px'
                    }}>

                    <img src="https://www.europrint.uz/assets/images/Group%2031.png" alt="" className={'img1'}/>

                    <Typography variant={'h5'} style={{fontSize: '25px', marginTop: '15px'}}>
                        Qulay narx
                    </Typography>
                    <Typography>
                        Kompaniyamiz qadriyatlariga ko’ra, hamkorlikda ikkala taraf uchun ham manfaatlik ish olib
                        borish, bu hamkorlikni bardavomligi ta’minlavchi eng katta omilidir.
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
}

export default Main3;
