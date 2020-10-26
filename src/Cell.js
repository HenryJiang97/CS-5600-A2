import React, {Component} from 'react';

import './Cell.css';

let CELL_SIZE = 1;
let BORDER_WIDTH = 3;
class Cell extends Component {
    constructor(props) {
        super(props);
        this.getGradient()
        this.handleClick = this.handleClick.bind(this);

        this.setCellSize();
    }

    setCellSize(){
        const x = this.props.x;
        const y = this.props.y;
        let xSize = 450/x;
        let ySize = 1200/y;
        let cell_size  = Math.min(xSize, ySize);
        CELL_SIZE = Math.max(cell_size, 1);
        if(CELL_SIZE <= 10){
            BORDER_WIDTH = 1
        }
        if(CELL_SIZE === 1){
            BORDER_WIDTH = 0.5
        }
    }

    // Change alive state when clicking on cell
    handleClick() {
        let i = this.props.i, j = this.props.j;
        this.props.flipCell(i, j);
    }

    // Get color gradient for the cell (white to black)
    getGradient() {
        const global_time = this.props.global_time / 1000;
        const last_time = this.props.time / 1000;
        let diff = global_time - last_time;
        
        //console.log(global_time, last_time);

        let gradient = Math.max(0, 1 - diff / (this.props.frequency / 100));
        //console.log(gradient);
        // if (diff < 10)    console.log(gradient);
        if(this.props.alive) return 'rgba(0,0,0)';
        if(gradient === 0) return 'rgba(255,255,255)';
        else{
            return 'rgba(0,155,0,'+gradient.toString()+')';
        }
        
    }

    render () {
        return (
            //<div className='Cell' style={{backgroundColor: `rgba(0, 0, 0, ${this.getGradient()})`}} onClick={this.handleClick}/>
            <div className='Cell' style={{ width: CELL_SIZE, height: CELL_SIZE, borderWidth: BORDER_WIDTH, backgroundColor: this.getGradient()}} onClick={this.handleClick}/>
        );
    }
}


export default Cell;