import React, {Component} from 'react';

import Cell from './Cell';
import './Grid.css';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global_time: parseInt(20000),
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
        let grid = [];
        for (let i = 0; i < arr.length; i++) {
            let row = [];
            for (let j = 0; j < arr[0].length; j++) {
                row.push(<Cell 
                            alive={arr[i][j].alive}
                            global_time={this.state === undefined ? parseInt(20000) : parseInt(this.state.global_time)}
                            time={arr[i][j].time}
                            frequency={parseInt(this.props.frequency)}
                            i={i}
                            j={j}
                            flipCell={(x, y) => this.flipCell(x, y)}
                        />);
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
                row.push({alive: alive, time: alive ? (this.state === undefined ? parseInt(20000) : parseInt(this.state.global_time)) : 0});
            }
            arr.push(row);
        }
        
        let grid = this.buildGrid(arr);

        return {arr: arr, grid: grid};
    }

    // Flip cell state
    flipCell(i, j) {
        let arr = this.state.arr.arr;

        if (this.state.state === "stop") {
            arr[i][j].alive = arr[i][j].alive ? false : true;
            if (arr[i][j].alive == true) {
                arr[i][j].time = this.state === undefined ? parseInt(20000) : parseInt(this.state.global_time);
            }
            let grid = this.buildGrid(arr);
            this.setState({arr: {arr: arr, grid: grid}});
        }
    }

    // Update grid over time
    updateGrid() {
        const dir = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
        const m = this.props.height, n = this.props.width;
        let arr = this.state.arr.arr;
        let newArr = [];

        for (let i = 0; i < m; i++) {
            let newRow = [];
            for (let j = 0; j < n; j++) {
                // Get number of alive cells around current cell
                let cnt = 0;
                for (let d in dir) {
                    let ni = i + dir[d][0], nj = j + dir[d][1];
                    if (ni < 0 || nj < 0 || ni >= m || nj >= n)    continue;
                    if (arr[ni][nj].alive)    cnt++;
                }

                if (arr[i][j].alive) {    // Current cell alive
                    if (cnt < 2 || cnt > 3)    newRow.push({alive: false, time: arr[i][j].time});
                    else    newRow.push({alive: arr[i][j].alive, time: arr[i][j].time});
                } else {    // Current cell dead
                    if (cnt === 3)    newRow.push({alive: true, time: this.state.global_time});
                    else    newRow.push({alive: arr[i][j].alive, time: arr[i][j].time});
                }
            }
            newArr.push(newRow);
        }

        let grid = this.buildGrid(newArr);
        this.setState({arr: {arr: newArr, grid: grid}});
    }

    // Update the grid once every 2s
    update() {
        setInterval(() => {
            if (this.state.state === "start") {
                this.setState({global_time: this.state === undefined ? 20000 : this.state.global_time + parseInt(this.props.frequency)});
                console.log(this.state.global_time);
                this.updateGrid();
            }
        }, parseInt(this.props.frequency));
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