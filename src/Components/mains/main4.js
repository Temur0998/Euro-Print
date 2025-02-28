import React from 'react';
import Container from "@mui/material/Container";
import {Box, Typography} from "@mui/material";

function Main4() {
    return (
        <Box sx={{textAlign: 'center', marginTop: "175px"}}>

            <Typography variant={'h3'}>
                Bizning Xizmatlar
            </Typography>

            <Container
                sx={{
                    marginTop: '55px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '5px',
                }}>

                <Box className="box-container">
                    <img src="https://www.europrint.uz/assets/images/mahsulot.png" alt="" className={'img2'}/>
                    <div className="hover-text">Gofra karobka</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot2.png" alt="" className={'img2'}/>
                    <div className="hover-text">Etiketka</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot3.png" alt="" className="img2"/>
                    <div className="hover-text">Flaer</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot4.png" alt="" className="img2"/>
                    <div className="hover-text">Bloknot</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot5.png" alt="" className="img2"/>
                    <div className="hover-text">Listovka</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot6.png" alt="" className="img2"/>
                    <div className="hover-text">Buklet</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot7.png" alt="" className="img2"/>
                    <div className="hover-text">Kalendar</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot8.png" alt="" className="img2"/>
                    <div className="hover-text">Katalog</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot9.png" alt="" className="img2"/>
                    <div className="hover-text">Visitka</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot10.png" alt="" className="img2"/>
                    <div className="hover-text">Jurnal</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot11.png" alt="" className="img2"/>
                    <div className="hover-text">Qog'oz stakan</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

                <Box className="box-container" sx={{marginLeft: '1.3%', marginTop: '13px'}}>
                    <img src="https://www.europrint.uz/assets/images/mahsulot12.png" alt="" className="img2"/>
                    <div className="hover-text">Kraft qog'oz paketlar</div>
                    <button className="button">Buyurtma berish</button>
                </Box>

            </Container>
        </Box>
    );
}

export default Main4;