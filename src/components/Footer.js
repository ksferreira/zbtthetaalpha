import React from 'react';
import { Box, Typography } from '@mui/material';
import { CONSTANTS } from '../styles/constants';

const Footer = () => {
	return (
    <Box
        sx={{
            bgcolor: CONSTANTS.ZBT_DARK_NAVY,
            width: '100%',
            display: 'inline-block',
            textAlign: 'center',
            position: 'relative',
            margin: 0,
        }}
        component={'div'}>
            <Typography variant='h1'>
                ZETA BETA TAU FOOTER
            </Typography>
    </Box>
    );
};

export default Footer;