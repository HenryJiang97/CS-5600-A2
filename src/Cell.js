import React, {Component} from 'react';

import './Cell.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alive: this.getAliveState()
        }
        this.handleClick = this.handleClick.bind(this);
    }

    // Get cell alive state from props
    getAliveState() {
        return this.props.alive;
    }

    // Change alive state when clicking on cell
    handleClick() {
        this.setState({alive: this.state.alive ? false : true});
    }

    render () {
        return (
            <div className='Cell' style={{backgroundColor: this.state.alive ? "black" : "white"}} onClick={this.handleClick}/>
        );
    }
}


export default Cell;