import React from 'react';

const divStyle = {
    height: "100%",
    width: "100%",
    position: "relative",
    transform: "rotate(45deg)"
}

const X = (props) => (
    <div style={divStyle}>
      <div style={{top: "0", left: "0", height: "100%", width: "100%", position: "absolute",}}>
          <div style={{height: "40%", width: "100%"}}/>
          <div style={{height: "20%", width: "100%", background: "#566f0c"}}/>
      </div>
      <div style={{top: "0", left: "0", height: "100%", width: "100%", position: "absolute"}}>
          <div style={{height: "100%", width: "40%", float: "left"}}/>
          <div style={{height: "100%", width: "20%", float: "left", background: "#566f0c"}}/>
      </div>
    </div>
);

export default X;
