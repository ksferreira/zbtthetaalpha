import React from 'react';
import { Box, Typography, useMediaQuery, Container, styled } from '@mui/material';
import { CONSTANTS } from '../../styles/constants';
import HistoryCard from '../../components/HistoryCard';
import EBoardCard from '../../components/EBoardCard/EBoardCard2';
import Carousel from 'react-material-ui-carousel';
import { BANNER_IMAGES } from './images';

const Item = (props) => {

	const DivBox = styled('div')({
		height: '300px',
		filter: 'blur(8px)',
		backgroundImage: `url('${props.src}')`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	});
	
	const Img = styled('img')({
		height: '100%',
		// position: 'absolute',
		// top: '50%',
		// left: '50%',
		// transform: 'translate(-50%, -50%)',
		// zIndex: '2',
	});

	const Card = styled('div')({
		backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
		height: '100%',
		width: '300px',
		padding: '15px',
	});

	const ImgCard = styled('div')({
		height: '100%',
		zIndex: '2',
		position: 'absolute',
		display: 'flex',
		flexDirection: 'row',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	});

	return (
		<React.Fragment>
			<DivBox />
			
			<ImgCard >
				<Img src={props.src} />
				<Card>
					<Typography sx={{
						borderColor: CONSTANTS.ZBT_GOLD,
						borderBottom: `thick double ${CONSTANTS.ZBT_GOLD}`,
					}}>
						{props.title}
					</Typography>
					<Typography sx={{ 
						fontSize: '14px',
						textAlign: 'left',
						}}>
						{props.description}
					</Typography>
				</Card>
			</ImgCard>
		</React.Fragment>
	);
}

const Home = () => {
	return (
		<React.Fragment>
			<Container>
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

				<Carousel>
					{
						BANNER_IMAGES.map((item, i) => {
						
						
						return <Item src={item.src} alt={item.alt} title={item.title} description={item.description}/>
					})
					}
				</Carousel>

				{/* <ParallaxBanner
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

				</ParallaxBanner> */}

				<Box
					sx={{
						textAlign: 'center',
						height: '100px',
						opacity: 0,
					}}
				>
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
			</Container>
		</React.Fragment>
	);
};

export default Home;
