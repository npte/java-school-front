import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';

import X from './X';
import Zero from './Zero';

const divStyle = {
  flex: '0 1 auto',
  width: '32%',
  height: '32%',
  board: '1px solid black',
  backgroundColor: '#dee0c0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const divStyle1 = {
  flex: '0 1 auto',
  width: '32%',
  height: '32%',
  board: '1px solid black',
  backgroundColor: "#c8df59",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}; 

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.set(this.props.idx);
  }

  render() {
          console.log(this.props);
    return (
      <div style={divStyle} onClick={this.handleClick}>
        {
          this.props.board[this.props.idx] === 1 ? <X/> : this.props.board[this.props.idx] === -1 && <Zero line={this.props.line}/>
        }
      </div>
    )
  }
}

export default connect(
  store => ({board : store.board}),
  dispatch => ({ set: (index) => dispatch({type:'SET', index})})
) (Cell);
