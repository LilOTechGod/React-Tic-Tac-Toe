import React from 'react'

export const Square = (props) => {
    console.log(props.squares, props.player)
    console.log(props.squareValue)

    //! function to handle when a user clicks on an individual square
    const handleClick = () => {
        if(!props.squareValue) {
            if(props.player) {
                props.squares.splice(props.index, 1, 'X');
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }else {
                props.squares.splice(props.index, 1, 'O');
                props.setSquares(props.squares);
                props.setPlayer(!props.player);
            }
        }
    };

  return (
    <div className='square' onClick={handleClick}>{props.squareValue === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue }</div>
  )
}
