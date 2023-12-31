export const questionnaireHeaderStyles = {
  position: 'relative',
  width: '100%',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '40px',
};

export const headerStyles = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '29px',
  fontWeight: '700',
  color: '#728094',
  textAlign: 'center',
  zIndex: 2,
  marginBottom: "-5%",
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

export const viewMoreButtonStyles = {
  display: 'block',
  margin: '50px auto',  // top and bottom margin is 20px, auto will center the button
  padding: '10px 40px', // padding for the button
  backgroundColor: '#fff',
  color: '#728094', // text color
  border: '1px solid #728094',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
};

export const getStartedButtonStyles = {
  width: "10%",
  textAlign: "center",
  display: "block",
  margin: "30px auto", // top and bottom margin is 20px, auto will center the button
  marginTop: "3%",
  marginBottom: "5%",
  padding: "10px 30px", // padding for the button
  backgroundColor: "#C9D4F84D",
  color: "#728093", // text color
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
  border: "1px solid transparent",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
};

export const getStartedButtonHoverStyle = {
  backgroundColor: "transparent",
  border: "1px solid #728094",
  color: "#728094",
};
