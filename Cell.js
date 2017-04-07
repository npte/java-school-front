import React from 'react';
import ReactDOM from 'react-dom'

import X from './X';
import Zero from './Zero';

const divStyle = {
  flex: '0 1 auto',
  width: '30%',
  height: '30%',
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const divStyle1 = {
  flex: '0 1 auto',
  width: '30%',
  height: '30%',
  border: '1px solid black',
  backgroundColor: "#7ecf01",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      scale: 1
    }
  }

  handleClick() {
    this.props.callback(this.props.idx);
  }

  render() {
    return (
      <div style={this.props.line ? divStyle1 : divStyle} onClick={this.handleClick}>
        { 
          this.props.xo === 'X' ? 
            <X scale={this.state.scale} /> 
            : this.props.xo === 'O' && <Zero scale={this.state.scale} />
        }
      </div>
    )
  }
}

export default Cell;
