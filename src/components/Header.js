import React from 'react';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';

const Header = () => {
	return (
		<React.Fragment>
			{/* <AppBar position='sticky' sx={{textAlign: 'center'}}> */}
				{/* <Toolbar> */}
					<Box sx={{
						textAlign: 'center'
					}}>
						<Typography
						variant='h6'
						sx={{
							color: 'transparent',
							textShadow: '0 0 0 white',
						}}
						>⚜️POWERHOUSE OF EXCELLENCE⚜️</Typography>
					</Box>
				{/* </Toolbar> */}
			{/* </AppBar> */}
		</React.Fragment>
	);
};

export default Header;
