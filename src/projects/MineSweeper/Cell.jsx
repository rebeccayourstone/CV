import React from "react";
import "./Cell.css";
import { useState } from "react";

function Cell(props) {
  //state that keeps track of the cells "value"
  const [value, setValue] = useState("");
  //state that keep strack of the mine img.
  const [valueImage, setValueImage] = useState(false);
  //state that keeps track of if the cell is clicked on or not
  const [clicked, setClicked] = useState(false);
  //state that keeps track of if the cell is right-clicked (mined) or not
  const [flagged, setFlagged] = useState(false);

  //function that handels cellClick if the game is not on it will return immidiatly.
  const onCellClick = () => {
    if (!props.gameOn) {
      return;
    }
    //checks if the cell has bin "flagged"/rightclicked and if not it sets the clicked state to true.
    if (!flagged) {
      setClicked(true);
      //checks if the clicked cell has the property "hasMine" and if so changes displayes the mine-img and the state valueImage to true and calls the handleGameOver function in the board-component
      if (props.cellData.hasMine) {
        setValueImage(true);
        props.handleGameOver();
        //else it displayes the cells value numberOfNeighbouringMines and calls the function onCellClick.
      } else {
        setValue(props.cellData.numberOfNeighbouringMines);
        props.onCellClick();
      }
    }
  };

  //defines the onRightClick function and prevents its default.

  const onRightClick = (event) => {
    event.preventDefault();
    //checkes if the cell is already clicked and returns immidiatly if true
    if (!props.gameOn || clicked) {
      return;
    }

    //check if its not flagged and if true it reduces the flagcounter by one and adds the flagged state to the cell.
    //if its already flagged it does the opposit.

    if (!flagged) {
      props.removeFlag();
      setFlagged(true);
    } else {
      props.addFlag();
      setFlagged(false);
    }
  };

  //returns jsx that determines how the individual cells look.

  return (
    <>
      <button
        type="button"
        onClick={onCellClick}
        onContextMenu={onRightClick}
        disabled={clicked}
      >
        {/* renders flag based on if the state flagged is true or not */}
        {flagged && (
          <div>
            <i className="bi bi-cone-striped flag"></i>
          </div>
        )}

        {/* renders the mine based on if the state valueImage is true or not */}
        {valueImage && (
          <div className="mine">
            <img src="/assets/logo192.png" alt="mine"></img>
          </div>
        )}
        {/* displayes the cells value that it got from numberOfNeighbouringMines */}
        {value}
      </button>
    </>
  );
}

export default Cell;
