import React from 'react';
import Tile from './tile'

class Board extends React.Component{
    constructor(props) {
        super(props)
        this.renderRow = this.renderRow.bind(this)
        this.renderTiles = this.renderTiles.bind(this)
    }

    renderRow() {
        const tiles = this.props.board.grid.map((row, i) => {
            return <div className='row' key={`row-${i}`}>
                {this.renderTiles(row)}
            </div>
        })
        return tiles
    }

    renderTiles(row) {
        return (
            row.map((tile, j) => {
                return <Tile
                    key={`col-${j}`}
                    tile={tile}
                    updateGame={this.props.updateGame} />
            })
        )
        
    }

    render() {
        return (
            <div id='board'>
                {this.renderRow()}
            </div>
        )

    }
}

export default Board;