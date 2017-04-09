import React from 'react';

const divStyle = {
    height: "100%",
    width: "100%",
    position: "relative"
}

const innerDivStyle = {
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      position: "absolute",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

const circleOutter = {
    height: "85%",
    width: "85%",
    borderRadius: "50%",
    background: "#666846"
}

const circleInner = {
    height: "55%",
    width: "55%",
    borderRadius: "50%",
    background: "#dee0c0"
}

const circleInner1 = {
    height: "55%",
    width: "55%",
    borderRadius: "50%",
    background: "#c8df59"
}

const Zero = (props) => (
  <div style={divStyle}>
    <div style={innerDivStyle}>
        <div style={circleOutter}/>
    </div>
    <div style={innerDivStyle}>
        <div style={props.line ? circleInner1 : circleInner}/>
    </div>
  </div>
);

export default Zero;
