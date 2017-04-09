import React from 'react';
import ReactDOM from 'react-dom'

import X from './X';
import Zero from './Zero';

const divStyle = {
  flex: '0 1 auto',
  width: '32%',
  height: '32%',

  backgroundColor: '#dee0c0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const divStyle1 = {
  flex: '0 1 auto',
  width: '32%',
  height: '32%',

  backgroundColor: "#c8df59",
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
            <X/>
            : this.props.xo === 'O' && <Zero line={this.props.line}/>
        }
      </div>
    )
  }
}

export default Cell;
