import React, {Component} from 'react';

import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.getGradient()
        this.handleClick = this.handleClick.bind(this);
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
        // console.log(global_time, last_time);

        let gradient = Math.max(0, 1 - diff / (this.props.frequency / 100));
        // if (diff < 10)    console.log(gradient);
        return gradient;
    }

    render () {
        return (
            <div className='Cell' style={{backgroundColor: `rgba(0, 0, 0, ${this.getGradient()})`}} onClick={this.handleClick}/>
        );
    }
}


export default Cell;