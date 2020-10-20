import React, {Component} from 'react';

import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Change alive state when clicking on cell
    handleClick() {
        let i = this.props.i, j = this.props.j;
        this.props.flipCell(i, j);
    }

    render () {
        return (
            <div className='Cell' style={{backgroundColor: this.props.alive ? "black" : "white"}} onClick={this.handleClick}/>
        );
    }
}


export default Cell;