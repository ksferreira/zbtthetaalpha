import React from 'react';
import { Box, Typography } from '@mui/material';
import { CONSTANTS } from '../styles/constants';

const Footer = () => {
	return (
    <Box
        sx={{
            bgcolor: CONSTANTS.ZBT_DARK_NAVY,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            margin: 0,
        }}>
            <Typography variant='h4'>
                ZETA BETA TAU FOOTER
            </Typography>
    </Box>
    );
};

export default Footer;