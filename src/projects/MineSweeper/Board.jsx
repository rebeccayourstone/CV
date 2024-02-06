import React from "react";
import createBoard from "./utils";
import "./Board.css";
import Cell from "./Cell";

//style for winners
const winStyle = {
  color: "#3e8d63",
  textShadow: "0 0 20px #80dfac, 0 0 20px #3e8d635e",
};

//style for losers
const loseStyle = {
  color: "#d62518",
  textShadow: "0 0 20px #f3493d, 0 0 20px #d6251853",
};

class Board extends React.Component {
  //creates the newBoard field
  newBoard;

  constructor(props) {
    super(props);

    this.state = {
      //sets the gameOn state to true
      gameOn: true,
      //state that keeps track of the correct numbers of cells clicked
      correctCellsClicked: 0,
      //state that keeps track of if the game is won
      gameWon: false,
      //state that keeps track of how many mines the player has left to mark
      numberOfMinesMarked: 7,
      //state that keeps track of the time spent since the player clicked the first cell
      time: 0,
      //state that keeps track of if the timer has started
      timerStarted: false,
      //state that keeps track of the timers ID to enable stopping the count.
      intervalID: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
    this.addFlag = this.addFlag.bind(this);
    this.removeFlag = this.removeFlag.bind(this);
    this.gameMessage = this.gameMessage.bind(this);
    this.timer = this.timer.bind(this);

    //Creats the board
    this.newBoard = createBoard(25, 7);
  }

  //function that handles click
  handleClick() {
    //checks if time is not already started by the state timeStarted, if so it starts the timer
    if (!this.timerStarted) {
      this.setState((prevState) => ({
        ...prevState,
        timerStarted: true,
      }));
      this.timer();
    }
    //adds +1 to the correctCellsClicked to enable checking if the player has won the game
    this.setState((prevState) => ({
      ...prevState,
      correctCellsClicked: prevState.correctCellsClicked + 1,
    }));
    //checks if the correct number of cells clicked has won the game, then calls the handleGameOver and set the gameWon-state to true
    if (this.state.correctCellsClicked + 1 === 25 - 7) {
      this.handleGameOver();
      this.setState({
        gameWon: true,
      });
    }
  }

  //function that adds 1 to the flag-counter to help the player see how many mines thera are left in the game
  addFlag() {
    this.setState((prevState) => ({
      ...prevState,
      numberOfMinesMarked: prevState.numberOfMinesMarked + 1,
    }));
  }
  //function that removes 1 to the flag-counter to help the player see how many mines thera are left in the game
  removeFlag() {
    this.setState((prevState) => ({
      ...prevState,
      numberOfMinesMarked: prevState.numberOfMinesMarked - 1,
    }));
  }

  //timer that starts when he player clicks on their irst cell and counts up every second.
  timer() {
    if (!this.state.timerStarted) {
      const myInterval = setInterval(() => {
        this.setState((prevState) => ({
          ...prevState,
          time: prevState.time + 1,
        }));
      }, 1000);
      //sets the timeStarted state to true and sets the intervalID to the ID of the setInterval()
      this.setState((prevState) => ({
        ...prevState,
        timerStarted: true,
        intervalID: myInterval,
      }));
    }
  }
  //function that handles game over by setting the state gameOn to false and stopping the timer with clearInterval
  handleGameOver() {
    this.setState({ ...this.state, gameOn: false });
    clearInterval(this.state.intervalID);
  }

  //function that determines what style to display based on if the player has won the game or not.
  gameMessage() {
    if (this.state.gameWon) {
      return (
        <>
          <i style={winStyle} className="bi bi-emoji-sunglasses"></i>
          <div style={winStyle}>You Won!</div>
        </>
      );
    } else if (this.state.gameOn) {
      return (
        <>
          <i className="bi bi-emoji-smile"></i>
          <div>Game On!</div>
        </>
      );
    } else {
      return (
        <>
          <i style={loseStyle} className="bi bi-emoji-frown"></i>
          <div style={loseStyle}>Game Over!</div>
        </>
      );
    }
  }

  //render function that returns the jsx displayed
  render() {
    return (
      <div>
        <div className="mine-fake-body">
          <div className="gameContainer">
            <div className="gameInfo">
              <div className="minesLeft">
                Mines:
                <br />
                {this.state.numberOfMinesMarked}
              </div>
              <div className="gameMessage">{this.gameMessage()}</div>
              <div className="time">
                Time: <br />
                {this.state.time}
              </div>
            </div>
            <div className="boardContainer">
              {this.newBoard.map((item, index) => (
                //displayes the cell-function and sends down nessecary props.
                <Cell
                  key={index}
                  handleGameOver={this.handleGameOver}
                  cellData={item}
                  onCellClick={this.handleClick}
                  gameOn={this.state.gameOn}
                  addFlag={this.addFlag}
                  removeFlag={this.removeFlag}
                />
              ))}
            </div>
            {/* <small>By Rebecca Yourstone FEU22</small> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
