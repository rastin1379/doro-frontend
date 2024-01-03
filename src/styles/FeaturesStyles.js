const baseFeatureStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  margin: '10px 20px',  // Reduced margin for less space between boxes
  borderRadius: '25px',
  color: '#728094',
};

export const feature1Styles = {
  ...baseFeatureStyles,
  backgroundColor: '#DDF7F4',
};

export const feature2Styles = {
  ...baseFeatureStyles,
  backgroundColor: '#EFDEEC',
};

export const feature3Styles = {
  ...baseFeatureStyles,
  backgroundColor: '#E4EAFC',
};

export const featureContainerStyles = {
  display: 'flex',
  justifyContent: 'center', // Centered the boxes horizontally
  padding: '50px 10px',
};

export const featureBoxStyles = {
  width: '18%',  // Reduced width for smaller boxes
  backgroundColor: '#fff',
  borderRadius: '70px',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  margin: '0 20px', // Added margin to control spacing between boxes
};

export const featureBoxImgStyles = {
  width: '50%',
  marginBottom: '20px',
};
