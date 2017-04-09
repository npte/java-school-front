import React from 'react';

import X from './X';
import Zero from './Zero';


const divStyle = {
  height: "100%",
  width: "100%",
  position: "relative",
  backgroundColor: "#dee0c0",
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-arround',
  alignContent: 'space-arround',
  alignItems: 'center',
};

const Hi = (props) => (
  <div style={divStyle}>

    <div style={{ height: "50%", width: "100%" }}>

      <div style={{ height: "100%", width: "49%", float: "left", position: "relative" }}>
        <X />
      </div>
      <div style={{ height: "100%", width: "49%", float: "left", position: "relative" }}>
        <Zero />
      </div>
    </div>
    <div style={{
      height: "50%", 
      width: "100%", 
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignContent: 'space-arround',
      alignItems: 'center',
      align: 'center'
    }}>
      <div><a onClick={props.callback}>Начать игру</a></div>
    </div>
  </div>
);

export default Hi;
