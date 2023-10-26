export const questionnaireHeaderStyles = {
  position: 'relative',
  width: '100%',
  height: '200px', // Adjust this based on your needs
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const headerStyles = {
  position: 'absolute',  // Set to absolute
  top: '50%',            // Center vertically
  left: '50%',           // Center horizontally
  transform: 'translate(-50%, -50%)',  // Ensure it's perfectly centered
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'black',        // Assuming the image is dark, so the text is white for visibility
  textAlign: 'center',
  zIndex: 2,             // Ensure it stays on top
};