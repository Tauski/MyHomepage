import React from "react";

/*STATUSBAR simple prop to easily display some percentages*/
/*used now to display coding profiency*/

const StatusBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#f0e1df",
        borderRadius: 5,
        margin: 0,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
      }
    
      const labelStyles = {
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
      }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
}

export default StatusBar;