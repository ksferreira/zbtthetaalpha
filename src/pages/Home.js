import React from 'react';
import { Box, Typography, useMediaQuery, Container } from '@mui/material';
import { CONSTANTS } from '../styles/constants';
import zbtcropped from '../images/zbtcropped.jpeg';
import { ParallaxBanner } from 'react-scroll-parallax';
import HistoryCard from '../components/HistoryCard';
import EBoardCard from '../components/EBoardCard/EBoardCard';


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
						height: '400px',
					}}
				/>
        <Box sx={{
          boxShadow: 1
        }}>
          <Typography variant='h1' sx={{
          }}>
            ZETA BETA TAU
          </Typography>

          <Typography variant='subtitle1' sx={{
            borderBottom: 1,
            borderColor: CONSTANTS.ZBT_GOLD,
            display: 'block'
          }}>
            ΘA Chapter - University of Massachusetts Amherst
          </Typography>
        </Box>

        <Box sx={{
          bgcolor: CONSTANTS.ZBT_BACKGROUND
        }}>
          <Container>
            <HistoryCard />
          </Container>
		  <Container>
		  	<EBoardCard />
		  </Container>
        </Box>
			</Box>
		</React.Fragment>
	);
};

export default Home;
