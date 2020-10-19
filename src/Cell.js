import React, {Component} from 'react';

import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {alive: Math.floor(Math.random() * 2) == 0 ? true : false}
    }

    render () {
        return (
            <div className='Cell' style={{backgroundColor: this.state.alive ? "black" : "white"}}/>
        );
    }
}


export default Cell;