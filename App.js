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
      board: ['', '', '', '', '', '', '', '', ''],
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
    console.log("i =",i," end ",this.state.end)
    const qwer = this;

    let check = (a,b,c) => {
      const arr = qwer.state.board;
      console.log ("<" + arr[a] + ">-<" + arr[b] + ">-<" + arr[c] + ">");
      if ( (arr[a] != '') && (arr[a] === arr[b]) && (arr[a] === arr[c]) ) {
        var obj = {};
        obj[a]=true; obj[b]=true; obj[c]=true;
        qwer.setState( { line: obj} );
        qwer.setState( { end: true} );
        console.log("<" + a + ":" + arr[a] + ">-<" + b + ":" + arr[b] + ">-<" + c + ":" + arr[c] + ">!!!!!");
      }
    };

    let arr = this.state.board;
    if (arr[i] == '') {
      this.state.xo ? arr[i]='X' : arr[i]='O';
      this.setState( { board: arr} );
      this.setState( { xo: !this.state.xo } );
    }
    console.log("------ begin check ------")
    for (let i=0; i<3; i++) {
      check(i,i+3,i+6);
    }
    for (let i=0; i<3; i++) {
      check(3*i,3*i+1,3*i+2);
    }
    check(0,4,8);
    check(2,4,6);
    console.log("------ end check ------")
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
