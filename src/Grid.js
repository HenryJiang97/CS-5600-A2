import React, {Component} from 'react';

import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: "stop",
            grid: this.buildGrid()
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
    }
    
    // Build grid column
    buildColumn() {
        // Create every column and row for the grid
        const column = []
        for (let i = 0; i < this.props.width; i++) {
            let rand = Math.floor(Math.random() * 2);
            let alive = rand === 1 ? true : false;
            column.push(<Cell alive={alive}/>);
        }
        return column
    }

    // Build grid
    buildGrid() {
        const grid = []
        for (let i = 0; i < this.props.height; i++) {
            grid.push(
                <div className="Row">
                    {this.buildColumn()}
                </div>
            );
        }

        return grid;
    }

    handleStartClick() {
        this.setState({state: "start"});
    }

    handlePauseClick() {
        this.setState({state: "stop"});
    }

    handleResetClick() {
        
    }

    render() {
        
        return (
            <div>
                <div className="Grid">
                    {this.state.grid}
                </div>
                
                <div>
                    <button onClick={this.props.return}>RETURN</button>
                    <button onClick={this.handleStartClick}>START</button>
                    <button onClick={this.handleResetClick}>RESET</button>
                    <button onClick={this.handlePauseClick}>PAUSE</button>
                </div>
            </div>
            
        );
    }
}


export default Grid;