import React from 'react';

const divStyle = {
  flex: '0 1 auto',
  width: '40px',
  height: '40px',
  border: '1px solid black',
  lineHeight: '40px',
};

const divStyle1= {
  flex: '0 1 auto',
  width: '40px',
  height: '40px',
  border: '1px solid black',
  lineHeight: '40px',
  backgroundColor: "lightgreen",
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.callback(this.props.idx);
  }

  render() {
    return (
      <div style={this.props.line ? divStyle1 : divStyle} onClick={this.handleClick}>{this.props.xo}</div>
    )
  }
}

export default Cell;
