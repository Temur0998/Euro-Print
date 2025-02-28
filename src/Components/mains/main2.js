import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import './mains.css'

function Main2() {
    return (
        <Container
            sx={{
                marginTop: '55px',
                display: 'flex',
                flexDirection: 'row',
                padding: '5px',
            }}>

            <Box
                sx={{
                    width: '49%',
                    height: '550px',
                }}>

                <Typography variant={'h3'}>
                    Kompaniya haqida
                </Typography>

                <Typography variant={'h6'} style={{fontSize: '21px'}}>
                    Europrint kompaniyasi - bu biznesingiz yanada rivojlanishi va muvaffaqiyatga erishishidagi ishonchli
                    hamkor Kompaniyamiz buning uchun eng zamonaviy texnopark va yuqori tajribali jamoa bilan o’z
                    xizmatlarini taklif qilishdan benihoya hursand. Kompaniyamiz Sizning mahsulotingizni zamonaviy
                    imidjini yaratish va yetkazib berish, bu orqali savdoingizni oshirish, hamda bozorda o’z o’rningizni
                    topishingizda bor imkoniyatlarini berishga tayyor.
                </Typography>

                <Typography style={{marginTop: '45px'}}>
                    Kreativ Yondashuv <br/> <br/>
                    Zamonaviy texnologiya <br/> <br/>
                    Xizmat ko’rsatishdagi zamonaviy yondashuv <br/> <br/>
                    Birgalikda rivojlanish
                </Typography>

            </Box>
            <Box
                sx={{
                    width: '49%',
                    height: '550px',
                    marginLeft: '2%',
                }}>

                <img src="https://www.europrint.uz/assets/images/group%20333.png" alt="" className={'img'}/>

            </Box>

        </Container>
    );
}

export default Main2;