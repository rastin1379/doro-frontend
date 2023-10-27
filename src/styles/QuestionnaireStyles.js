export const questionnaireHeaderStyles = {
  position: 'relative',
  width: '100%',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '40px'
};

export const headerStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
  zIndex: 2
};

// Styles for the card container:
export const doroContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // Changed to space-between for equal spacing between cards
  padding: '0 15px', // Small horizontal padding to prevent cards from touching the container's edges
  gap: '10px',
  maxWidth: '1200px',
  margin: '0 auto'
};
