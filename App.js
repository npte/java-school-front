import React from 'react';

import Cell from './Cell';

const divStyle = {
  width: '130px',
  height: '130px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  textAlign: 'center',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: ['', '', '', '', '', '', '', '', ''],
      xo: true 
    }
    this.setXOinBoard = this.setXOinBoard.bind(this);
  }

  setXOinBoard(i) {
    let arr = this.state.board; 
    this.state.xo ? arr[i]=1 : arr[-1]=-1;
    this.setState( { board: arr} );
    this.setState( { xo: !xo } );
  }

  render() {
    return (
      <div style={divStyle}>
      {
        this.state.board.map((item, index) => (
          <Cell key={index} idx={index} callback={this.setXOinBoard}/>
        ))
      }
      </div>
    )
  }
}

export default App;
