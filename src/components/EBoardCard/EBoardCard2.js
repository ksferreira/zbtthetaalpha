import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, styled, Grid, Item } from '@mui/material';
import eBoard from './images/eboard.jpeg';
import { CONSTANTS } from '../../styles/constants';

const CardBox = styled('Box')({
    border: 1,
    borderColor: CONSTANTS.ZBT_GOLD
});


const OfficerTitleItem = (props) => {
    return (
        <Box>
            <Typography variant='h5'>
                {props.name}
            </Typography>
            <Typography variant='h6'>
                {props.office}
            </Typography>
        </Box>
    );
}

const HistoryCard = () => {
	return (
        <Box sx={{
            border: 1,
            borderColor: CONSTANTS.ZBT_GOLD,
            padding: '8px',
            backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
            boxShadow: `${CONSTANTS.ZBT_DARK_NAVY} 0px 0px 0px 8px`,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Card variant="outlined" sx={{ display: 'flex', width: '-webkit-fill-available'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 5, width: '60%', padding: '8px' }} >
                    <CardContent>
                        <Typography variant='h2'>
                            OUR OFFICERS
                        </Typography>
                        <Grid container spacing={2} sx={{ alignContent: 'center'}}>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, width: '100%' }}>
                                <OfficerTitleItem office="President" name="Andrew Witkowski" />
                                <OfficerTitleItem office="Operations Director" name="Max Freedman" />
                                <OfficerTitleItem office="Programming Director" name="Vedant Parekh" />
                                <OfficerTitleItem office="Finance Director" name="Caleb McKearney" />
                            </Grid>
                            <Grid item sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, width: '100%' }}>
                               <OfficerTitleItem office="Brotherhood Development Director" name="Zev Woodrow" />
                               <OfficerTitleItem office="Risk Prevention & Wellness Director" name="Kauan Ferreira" />
                               <OfficerTitleItem office="Recruitment Director" name="Jackson Jue" />
                            <OfficerTitleItem office="Communications Director" name="Elliott Nahmias" />

                            </Grid>
                        </Grid>
                    </CardContent>
                <CardMedia 
                component='img'
                image={eBoard}
                width='-webkit-fill-available'
                height="400px"
                alt='Founding class of the Alpha Chapter of ZBT.'
                sx={{ objectFit: 'cover', maxHeight: 'auto' }}
            />
                </Box>
            </Card>
        </Box>
	);
};

export default HistoryCard;
