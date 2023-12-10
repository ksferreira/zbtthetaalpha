import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import { CONSTANTS } from '../styles/constants';

const Header = () => {
	return (
		<React.Fragment>
			{/* <AppBar position='sticky' sx={{textAlign: 'center'}}> */}
				{/* <Toolbar> */}
				<Box sx={{
          boxShadow: 1,
		  textAlign: 'center'
        }}>
          <Typography variant='h3' sx={{
          }}>
            ZETA BETA TAU
          </Typography>

          <Typography variant='body1' sx={{
            borderBottom: 1,
            borderColor: CONSTANTS.ZBT_GOLD,
            display: 'block'
          }}>
            ΘA Chapter - University of Massachusetts Amherst
          </Typography>
        </Box>
				{/* </Toolbar> */}
			{/* </AppBar> */}
		</React.Fragment>
	);
};

export default Header;
