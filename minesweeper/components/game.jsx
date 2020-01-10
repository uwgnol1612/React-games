import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper'

class Game extends React.Component{
    constructor(props) {
        super(props)
        const board = new Minesweeper.Board(9, 10)
        this.state = {
            board: board
        }
        this.updateGame = this.updateGame.bind(this)
        this.restartGame = this.restartGame.bind(this)
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 10)
        this.setState ({ board: board })
        
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag()
        } else {
            tile.explore()
        }
        this.setState({
            board: this.state.board
        })
    }

    render() {
        let modal;
        if (this.state.board.won() || this.state.board.lost()) {
            const message = this.state.board.won() ? 'You won!' : 'You lost!'
            modal = <div className='modal-screen'>
                <div className='modal-content'>
                    <p>{message}</p>
                    <button onClick={this.restartGame}>Play Again</button>
                </div>
            </div>
        }
        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </div>
            
        )
    }
}

export default Game;