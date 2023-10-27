import React from 'react';
import { Paper, Typography } from '@mui/material';
import sessionImg from '../assets/completeSession.svg';
import resultsImg from '../assets/viewDetails.svg';
import trackImg from '../assets/trackSessions.svg';
import { 
    feature1Styles, 
    feature2Styles, 
    feature3Styles, 
    featureContainerStyles,
    featureBoxStyles,
    featureBoxImgStyles
} from '../styles/FeaturesStyles';

function Features() {
    const features = [
        {
            title: 'Complete the Session',
            description: 'Be yourself and answer honestly to find out your personality type.',
            img: sessionImg,
            style: feature1Styles
        },
        {
            title: 'View Detailed Results',
            description: 'Learn how your personality type influences many areas of your life.',
            img: resultsImg,
            style: feature2Styles
        },
        {
            title: 'Track the sessions',
            description: 'Grow into the person you want to be with your optional Premium Suite.',
            img: trackImg,
            style: feature3Styles
        },
    ];

    return (
        <div style={featureContainerStyles}>
            {features.map((feature, index) => (
                <Paper key={index} style={{...featureBoxStyles, ...feature.style}} elevation={3}>
                    <Typography variant="h6" gutterBottom style={{fontWeight: 'bold'}}>
                        {feature.title}
                    </Typography>
                    <img src={feature.img} alt={feature.title} style={featureBoxImgStyles} />
                    <Typography>
                        {feature.description}
                    </Typography>
                </Paper>
            ))}
        </div>
    );
}

export default Features;
