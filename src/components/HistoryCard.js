import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import historicalJews from '../images/historic_jews.jpg';
import { CONSTANTS } from '../styles/constants';

const CardBox = styled('Box')({
    border: 1,
    borderColor: CONSTANTS.ZBT_GOLD
});

const HistoryCard = () => {
	return (
        <Box sx={{
            border: 1,
            borderColor: CONSTANTS.ZBT_GOLD,
            padding: '8px',
            backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
            boxShadow: `${CONSTANTS.ZBT_DARK_NAVY} 0px 0px 0px 8px`,
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Card variant="outlined" sx={{ display: 'flex', width: '-webkit-fill-available'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 5, width: '60%', padding: '8px' }} >
                    <CardContent>
                        <Typography variant='h2'>
                            OUR HISTORY
                        </Typography>
                        <Typography variant='subtitle1'>

                            Zeta Beta Tau was founded as the first fraternity for Jewish men in 1898 at City College of New York. Since 1954, the fraternity has committed to non-sectarian brotherhood, and accepts men willing to embrace the tenets of its credo: Intellectual Awareness, Social Responsibility, Integrity and Brotherly Love.
                        </Typography>
                    </CardContent>
                <CardMedia 
                component='img'
                image={historicalJews}
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
