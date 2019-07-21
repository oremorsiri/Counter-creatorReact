import React from 'react';
import "./Counter.css"

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: +this.props.start || 0,
            step: +this.props.step || 1,
        }
    }
    decrement = () => {
        this.setState({ start: this.state.start - this.state.step })
    }
    increment = () => {this.setState({start: this.state.start + this.state.step })
        console.log(this.state.start)
    }
    render() {
        return (
            <div className="counter">
                <button onClick={this.decrement}>-</button>
                {this.state.start}
                <button onClick={this.increment}>+</button>
            </div>


        )
    }
};

export default Counter; 