import React, {Component} from 'react';
import Grid from './Grid';

let WIDTH = 0;
let HEIGHT = 0;
let FREQ = 0;
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "input",
            width: 0,
            height: 0,
            frequency: 2000
        };

        this.handleClick = this.handleClick.bind(this);
        this.setWidth = this.setWidth.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setFrequency = this.setFrequency.bind(this);
        this.handleReturnClick = this.handleReturnClick.bind(this);
    }

    validInput() {
        if(WIDTH >= 10 && WIDTH <= 300 && HEIGHT >=10 && HEIGHT <= 300 && FREQ >=50 && FREQ  <= 2000){
            return "true";
        }else if(HEIGHT < 10 || HEIGHT > 300){
            return "HEIGHT";
        }else if(WIDTH < 10 || WIDTH > 300){
            return "WIDTH";
        }else if(FREQ < 50 || FREQ  > 2000){
            return "FREQ";
        }
    }

    handleClick() {
        let valid=this.validInput();
        if(valid==="true"){
            this.setState({width: WIDTH});
            this.setState({height: HEIGHT});
            this.setState({frequency: FREQ});
            this.setState({page: "grid"});
        }else if(valid==="HEIGHT"){
            alert("Please insert a valid height (number between 10~100)")
        }else if(valid==="WIDTH"){
            alert("Please insert a valid width (number between 10~100)")
        }else if(valid==="FREQ"){
            alert("Please insert a valid frequency (number between 50~2000)")
        }
        
    }

    

    setWidth(evt) {
        WIDTH = evt.target.value;    
    }
    
    setHeight(evt) {
        HEIGHT = evt.target.value;
    }

    setFrequency(evt) {
        FREQ = evt.target.value;
    }

    refreshPage() {
        window.location.reload(false);
    }

    handleReturnClick() {
        this.setState({page: "input"});
    }

    handleRefreshClick() {
        this.setState({page: "input"});
        this.setState({page: "grid"});
    }

    render() {
        if (this.state.page === "input") {
            return (
                <div className = "blurred-box1">
                    <div className="content">
                        <h1 className="title">Conway’s History of Life</h1>
                        <h3>Grid dimension</h3>
                        <input placeholder='Height' onChange={this.setHeight}></input>
                        <input placeholder='Width' onChange={this.setWidth}></input>
                        <input placeholder='Frequency' onChange={this.setFrequency}></input>
                        <div>
                            <button className="creategrid" onClick={this.handleClick}>Create Grid</button>
                        </div>
                        
                        <p className = "hint">Restriction: Dimension(10 x 10 to 100 x 100), Frequency(50ms to 2000ms)</p>
                    </div>
                    
                </div>
            );
        } else {
            return (
                <div className="blurred-box">
                    <div className="content">
                        <h1 className="title">Conway’s History of Life</h1>
                        <Grid 
                            width={this.state.width}
                            height={this.state.height}
                            frequency={this.state.frequency}
                            return={()=>this.handleReturnClick()}
                            refresh={()=>this.handleRefreshClick()}
                        />
                    </div>
                    
                </div>                
            );
        }
        
    }
}


export default Home;