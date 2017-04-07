import React from 'react';

import Cell from './Cell';
//import Hi from './Hi';

const divStyle = {
  width: '80vh',
  height: '80vh',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  align: 'center',
  backgroundColor: '#d3e6d5'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''],
      line: {},
      xo: true,
      end: false,
      newGame: false
    };
    this.setXOinBoard = this.setXOinBoard.bind(this);
  }

  shouldComponentUpdate() {
    return !this.state.end;
  }

  setXOinBoard(i) {
    let arr = this.state.board;
    if ( (i - 4 > 0) && (arr[i-4] === '') ) {
      let temp = arr[i]; arr[i] = arr[i-4]; arr[i-4]=temp;
      this.setState({ board: arr});
      return;
    } 
    if ( (i - 1 > 0) && (arr[i-1] === '') ) {
      let temp = arr[i]; arr[i] = arr[i-1]; arr[i-1]=temp;
      this.setState({ board: arr});
      return;
    }
    if ( (i + 4 < 16) && (arr[i+4] === '') ) {
      let temp = arr[i]; arr[i] = arr[i+4]; arr[i+4]=temp;
      this.setState({ board: arr});
      return;
    } 
    if ( (i + 1 < 16) && (arr[i+1] === '') ) {
      let temp = arr[i]; arr[i] = arr[i+1]; arr[i+1]=temp;
      this.setState({ board: arr});
      return;
    }
  }

  render() {
    return (
      <div style={divStyle}>
      {
       this.state.newGame ? 
          <Hi/>
        :
          this.state.board.map((item, index) => (
            <Cell key={index} idx={index} xo={item} line={this.state.line[index]} callback={this.setXOinBoard}/>
          ))
        
      }
      </div>
    )
  }
}

export default App;
