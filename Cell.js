import React from 'react';

const divStyle = {
  flex: '0 1 auto',
  width: '40px',
  height: '40px',
  border: '1px solid black',
  lineHeight: '40px',
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { xo: '' };
    this.setXo = this.setXo.bind(this);
  }

  setXo() {
    if (this.state.xo == '') window.xo = !window.xo;
    window.xo ? this.setState({ xo: 'X' }) : this.setState({ xo: 'O' });
  }

  shouldComponentUpdate() {
    if (this.state.xo == '') return true;
    return false;
  }

  render() {
    return (
      <div style={divStyle} onClick={this.setXo}>{this.state.xo}</div>
    )
  }
}

export default Cell;
