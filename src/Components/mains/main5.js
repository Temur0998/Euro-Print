import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function Main5() {
    return (
        <Box
            sx={{textAlign: 'center', marginTop: '150px'}}>
            <Typography variant={'h4'} style={{fontWeight: 'bold'}}>
                Bizning Yutuqlarimiz
            </Typography>

            <Box
                sx={{
                    width: '1400px',
                    display: 'flex',
                    flexDirection: 'row',
                    borderTopRightRadius: '250px',
                    padding: '5px',
                    height: '175px',
                    marginTop: '95px!important',
                    margin: '0 auto',
                    backgroundColor: '#ececec',
                }}>


                <Box
                    sx={{
                        width: '32%',
                        height: '95px',
                        marginTop: '35px'
                    }}>

                    <Typography variant={'h3'} style={{fontWeight: 'bold'}}>
                        2400+
                    </Typography>
                    <Typography variant={'h6'}>
                        Bizning mijozlarimiz soni
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '95px',
                        marginTop: '35px'
                    }}>

                    <Typography variant={'h3'} style={{fontWeight: 'bold'}}>
                        1200+
                    </Typography>
                    <Typography variant={'h6'}>
                        Bajarilgan Buyurtmalar soni
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '32%',
                        height: '95px',
                        marginTop: '35px'
                    }}>

                    <Typography variant={'h3'} style={{fontWeight: 'bold'}}>
                        250+
                    </Typography>
                    <Typography variant={'h6'}>
                        Bizning mutaxasislari
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Main5;