import React, {Component} from 'react';
import Grid from './Grid';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "input",
            width: 0,
            height: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.setHeight = this.setHeight.bind(this);
    }

    handleClick() {
        this.setState({page: "grid"});
    }

    setWidth(evt) {
        this.setState({width: evt.target.value});
    }
    
    setHeight(evt) {
        this.setState({height: evt.target.value});
    }

    render() {
        if (this.state.page === "input") {
            return (
                <div>
                    <h3>Grid dimension</h3>
                    <input placeholder='Height' onChange={this.setHeight}></input>
                    <input placeholder='Width' onChange={this.setWidth}></input>
                    <button onClick={this.handleClick}>Create Grid</button>
                    <p>Restriction: 10 x 10 to 100 x 100</p>
                </div>
            );
        } else {
            return (
                <div>
                    <Grid width={this.state.width} height={this.state.height}/>
                </div>                
            );
        }
        
    }
}


export default Home;