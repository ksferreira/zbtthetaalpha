import React from 'react';
import { Box, Typography, useMediaQuery, Container } from '@mui/material';
import { CONSTANTS } from '../styles/constants';
import zbtcropped from '../images/zbtcropped.jpeg';
import { ParallaxBanner } from 'react-scroll-parallax';
import HistoryCard from '../components/HistoryCard';
import EBoardCard from '../components/EBoardCard/EBoardCard2';

const Home = () => {
	return (
		<React.Fragment>
			<Box
				sx={{
					bgcolor: CONSTANTS.ZBT_DARK_NAVY,
					width: '100%',
					display: 'grid',
					textAlign: 'center',
					m: 0,
					gridTemplateRows: 'repeat(3, minmax(mincontent, maxcontent))',
					gap: 0,
				}}
			>
				<ParallaxBanner
					layers={[
						{
							image: zbtcropped,
							speed: -15,
						},
					]}
					style={{
						height: '50vh',
					}}
				>
					<Box sx={{
						zIndex: 'app bar'
					}}>
						<Typography variant='h1'>Test</Typography>
					</Box>

				</ParallaxBanner>

				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						variant='h6'
						sx={{
							color: 'transparent',
							textShadow: '0 0 0 white',
						}}
					>
						⚜️POWERHOUSE OF EXCELLENCE⚜️
					</Typography>
				</Box>

				<Box
					sx={{
						bgcolor: CONSTANTS.ZBT_BACKGROUND,
					}}
				>
					<Container
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 4,
						}}
					>
						<HistoryCard />
						<EBoardCard />
					</Container>
				</Box>
			</Box>
		</React.Fragment>
	);
};

export default Home;
