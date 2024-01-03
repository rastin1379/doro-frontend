import React from 'react';
import { Paper, Typography } from '@mui/material';
import sessionImg from '../../assets/completeSession.svg';
import resultsImg from '../../assets/viewDetails.svg';
import trackImg from '../../assets/trackSessions.svg';
import {
  feature1Styles,
  feature2Styles,
  feature3Styles,
  featureContainerStyles,
  featureBoxStyles,
  featureBoxImgStyles,
} from "../../styles/FeaturesStyles";

function Features() {
    const features = [
        {
            title: 'Engage Sessions',
            description: 'Regular sessions for early vulnerability identification and intervention',
            img: sessionImg,
            style: feature1Styles
        },
        {
            title: 'Access Questionnaires',
            description: 'Explore questionnaires to foster informed self-awareness',
            img: resultsImg,
            style: feature2Styles
        },
        {
            title: 'Track Health',
            description: 'Monitor your mental well-being and seek guidance through Doro',
            img: trackImg,
            style: feature3Styles
        },
    ];

    return (
        <div style={featureContainerStyles}>
            {features.map((feature, index) => (
                <Paper key={index} style={{...featureBoxStyles, ...feature.style}} elevation={3}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        style={{
                            fontWeight: '500', // Set font weight to normal
                            fontSize: '24px', // Set font size to 1.5rem
                            textShadow: '2px 2px 4px rgba(0,0,0,0.2)', // Add text shadow
                        }}
                        >
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
