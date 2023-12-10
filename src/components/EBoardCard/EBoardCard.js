import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CONSTANTS } from '../../styles/constants';
import SwipableViews from 'react-swipeable-views-react-18-fix';
import { useState } from 'react';
import { autoPlay } from 'react-swipeable-views-utils-react-18-fix';
import andyImage from './images/andy.jpg';
import maxImage from './images/max.jpg';
import vedantImage from './images/vedant.jpg';
import jacksonImage from './images/jackson.jpg';
import calebImage from './images/caleb.jpg';
import kauanImage from './images/kauan.jpg';
import zevImage from './images/zev.jpg';
import elliottImage from './images/elliot.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipableViews);

const images = [
	{
		name: 'Andrew Witkowski',
		major: 'History',
		position: 'President',
		imgPath: andyImage,
	},
	{
		name: 'Max Freedman',
		major: 'Economics + Applied Math',
		position: 'Operations Director',
		imgPath: maxImage,
	},
	{
		name: 'Vedant Parekh',
		major: 'Food Science',
		position: 'Programming Director',
		imgPath: vedantImage,
	},
	{
		name: 'Jackson Jue',
		major: 'Computer Science',
		position: 'Recruitment Director',
		imgPath: jacksonImage,
	},
	{
		name: 'Caleb McKearney',
		major: 'Finance',
		position: 'Finance Director',
		imgPath: calebImage,
	},
	{
		name: 'Kauan Ferreira',
		major: 'Informatics + Computer Science minor)',
		position: 'Risk Prevention + Wellness Director',
		imgPath: kauanImage,
	},
	{
		name: 'Zev Woodrow',
		major: 'Psychology',
		position: 'Brotherhood Development Director',
		imgPath: zevImage,
	},
	{
		name: 'Elliott Nahmias',
		major: 'Psychology',
		position: 'Communications Director',
		imgPath: elliottImage,
	}
];

const EBoardCard = () => {
	const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    
	const handleNext = () => {
		setActiveStep((prevStep) => (prevStep + 1) >= images.length ? 0 : prevStep + 1);
	}

	const handleBack = () => {
		setActiveStep((prevStep) => (prevStep - 1) < 0 ? maxSteps : prevStep - 1);
	};

	const handleStepChange = (step) => {
		setActiveStep(step);
	};

    return (
		<Box
			sx={{
				border: 1,
				borderColor: CONSTANTS.ZBT_GOLD,
				padding: '8px',
				backgroundColor: CONSTANTS.ZBT_DARK_NAVY,
				boxShadow: `${CONSTANTS.ZBT_DARK_NAVY} 0px 0px 0px 8px`,
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Card
				variant='outlined'
				sx={{ display: 'flex', width: '-webkit-fill-available' }}
			>
				<Box
					sx={{
						display: 'flex', flexDirection: 'row', flexGrow: 5, width: '60%', padding: '8px'
					}}
				>
					<CardContent sx={{ height: '400px',	}}>
						<Box sx={{ position: 'absolute', display: 'flex', flexDirection: 'row', flexGrow: 5, width: '50%', padding: '8px' }}>

							<AutoPlaySwipeableViews
							axis='x'
							interval='1000000'
							index={activeStep}
							onChangeIndex={handleStepChange}
							enableMouseEvents
							>
								{images.map((brother, index) => {
									return (
										<Box sx={{
											display: 'flex',
											flexDirection: 'row',
										}}>
											<Box
												component='img'
												sx={{
													height: '100px',
													position: 'absolute',
													display: 'block',
													// marginLeft: 'auto',
													// marginRight: 'auto',
													// overflow: 'hidden',
													// width: '50%',
													// objectFit: 'cover',
												}}
												src={brother.imgPath}
												alt={`Brother ${brother.name}, ${brother.position}`}
												/>
											<Typography variant='h2'>
													{brother.name}
											</Typography>
											<Typography variant='subtitle1'>
												{brother.position}
											</Typography>
										</Box>
								)})}
							</AutoPlaySwipeableViews>
						</Box>
					</CardContent>
					{/* <CardContent> */}
						
					{/* </CardContent> */}
				</Box>
			</Card>
		</Box>
	);
};

export default EBoardCard;
