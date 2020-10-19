import React, {Component} from 'react';

import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const column = []
        for (let i = 0; i < this.props.width; i++) {
            column.push(<Cell />);
        }

        const grid = []
        for (let i = 0; i < this.props.height; i++) {
            grid.push(
                <div className="Row">
                    {column}
                </div>
            );
        }

        return (
            <div>
                <div className="Grid">
                    {grid}
                </div>
            </div>
            
        );
    }
}


export default Grid;