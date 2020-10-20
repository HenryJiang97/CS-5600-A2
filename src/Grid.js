import React, {Component} from 'react';

import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: "start",
            arr: this.buildArray()
        };
        this.update();

        this.handleStartClick = this.handleStartClick.bind(this);
        this.handlePauseClick = this.handlePauseClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
        this.update = this.update.bind(this);
    }

    // Build JSX grid
    buildGrid(arr) {
        console.log(arr[0][0]);
        let grid = [];
        for (let i = 0; i < arr.length; i++) {
            let row = [];
            for (let j = 0; j < arr[0].length; j++) {
                row.push(<Cell alive={arr[i][j]} i={i} j={j} flipCell={(x, y) => this.flipCell(x, y)}/>)
            }
            grid.push(
                <div className="Row">
                    {row}
                </div>
            );
        }
        return grid;
    }

    // Build life array
    buildArray() {
        const m = this.props.height, n = this.props.width;
        let arr = []
        for (let i = 0; i < m; i++) {
            let row = [];
            for (let j = 0; j < n; j++) {
                let rand = Math.floor(Math.random() * 2);
                let alive = rand === 1 ? true : false;
                row.push(alive);
            }
            arr.push(row);
        }
        
        let grid = this.buildGrid(arr);

        return {arr: arr, grid: grid};
    }

    // Flip cell state
    flipCell(i, j) {
        let arr = this.state.arr.arr;
        arr[i][j] = arr[i][j] ? false : true;
        let grid = this.buildGrid(arr);
        this.setState({arr: {arr: arr, grid: grid}});
    }

    // Update grid over time
    updateGrid() {
        const dir = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        const m = this.props.height, n = this.props.width;
        let arr = this.state.arr.arr;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let cnt = 0;
                for (let d in dir) {
                    let ni = i + dir[d][0], nj = j + dir[d][1];
                    if (ni < 0 || nj < 0 || ni >= m || nj >= n)    continue;
                    if (arr[ni][nj])    cnt++;
                }

                if (arr[i][j]) {    // Current cell alive
                    if (cnt < 2 || cnt > 3)    arr[i][j] = false;
                } else {    // Current cell dead
                    if (cnt === 3)    arr[i][j] = true;
                }
            }
        }

        let grid = this.buildGrid(arr);
        this.setState({arr: {arr: arr, grid: grid}});
    }

    // Update the grid once every 2s
    update() {
        setInterval(() => {
            if (this.state.state === "start") {
                this.updateGrid();
            }
        }, 2000);
    }

    handleStartClick() {
        this.setState({state: "start"});
    }

    handlePauseClick() {
        this.setState({state: "stop"});
    }

    handleResetClick() {
        this.setState({state: "start", arr: this.buildArray()});
    }

    render() {
        
        return (
            <div>
                <div className="Grid">
                    {this.state.arr.grid}
                </div>
                
                <div><button onClick={this.props.return}>RETURN</button></div>

                <div>
                    <button onClick={this.handleStartClick}>START</button>
                    <button onClick={this.handlePauseClick}>PAUSE</button>
                </div>

                <div><button onClick={this.handleResetClick}>RESET</button></div>
            </div>
            
        );
    }
}


export default Grid;