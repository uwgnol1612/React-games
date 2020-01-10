import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const flagged = e.altKey ? true : false
        this.props.updateGame(this.props.tile, flagged)
    }

    render() {
        const tile = this.props.tile;
        let klass, text, count;

        if (tile.explored){
            if (tile.bombed) {
                klass = 'bombed';
                text = '\u2620'
            } else {
                klass = 'explored';
                count = tile.adjacentBombCount();
                text = count > 0 ? `${count}` : ''
            }
        } else if (tile.flagged) {
            klass = 'flagged'
            text = '\u2691'
        } else {
            klass = 'unexplored'
        }

        return (
            <div className={`tile ${klass}`} onClick={this.handleClick}>
                {text}
            </div>
        )

    }
}

export default Tile;