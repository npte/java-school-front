import React from 'react';
import './Button.css'
import Cell from './Cell';
import Hi from './Hi';
import { connect } from 'react-redux';

const divStyle = {
  width: '80vh',
  height: '80vh',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignContent: 'space-between',
  align: 'center',
  backgroundColor: '#35331a'
};

class App extends React.Component {
   /*constructor(props) {
    super(props);
    this.state = {
      line: {},
      xo: true,
      end: false,
      newGame: true
    };
    this.setXOinBoard = this.setXOinBoard.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.end && nextState.end) ;
  }

  startGame() {
    this.setState({ newGame: false });
  }

  newGame() {
    console.log('newGame')
    this.setState(
      {
        board: ['', '', '', '', '', '', '', '', ''],
        line: {},
        xo: true,
        end: false
      }
    );
  }

  setXOinBoard(i) {
    const qwer = this;

    let check = (a, b, c) => {
      const arr = qwer.state.board;
      if ((arr[a] != '') && (arr[a] === arr[b]) && (arr[a] === arr[c])) {
        var obj = {};
        obj[a] = true; obj[b] = true; obj[c] = true;
        qwer.setState({ line: obj });
        qwer.setState({ end: true });
      }
    };

    let isNoMoreTurns = () => {
      return !qwer.state.board.some(function (item) {
        return item === '';
      });
    }

    let arr = this.state.board;
    if (arr[i] == '') {
      this.state.xo ? arr[i] = 'X' : arr[i] = 'O';
      this.setState({ board: arr });
      this.setState({ xo: !this.state.xo });
    }
    for (let i = 0; i < 3; i++) {
      check(i, i + 3, i + 6);
    }
    for (let i = 0; i < 3; i++) {
      check(3 * i, 3 * i + 1, 3 * i + 2);
    }
    check(0, 4, 8);
    check(2, 4, 6);

    if (isNoMoreTurns()) {
      this.setState({ end: true });
    }
  }

  render() {
    if (this.state.newGame) {
      return (
        <div style={divStyle}>
          <Hi callback={this.startGame} />
        </div>
      )
    } else {
      return (<div>
        <div style={divStyle}>
          {
            this.state.newGame ?
              <Hi />
              :
              this.state.board.map((item, index) => (
                <Cell key={index} idx={index} xo={item} line={this.state.line[index]} callback={this.setXOinBoard} />
              ))
          }
        </div >
        <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignContent: 'space-between',
          align: 'center'
        }}>
          <div style={this.state.end ? { display: 'flex'} : { display: 'none' }}>
            <a className='button' onClick={this.newGame}>Начать игру</a>
          </div>
        </div>
      </div>
      )
    }
  }*/


  /*
{this.props.board.map(
                  (item, index) => (
                    <Cell key={index} idx={index}/>
                  )
              )}
   */

  render() {
    console.log(this.props)
    return (
        <div style={divStyle}>
              aaa
        </div>
      )
  }
}

export default connect(
  store => ({board : store.board})
) (App);
