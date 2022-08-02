const React = require("react");

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }

        this.counter_value = 0; 
    }

    increase() {
        this.counter_value++;
        this.setState({value: this.counter_value});
    }

    decrease() {
        this.counter_value--;
        this.setState({value: this.counter_value});
    }

    render() {

        return (
            <div>
                <h2>Counter component</h2>

                <strong>Counter: {this.state.value}</strong>
                
                <br/>

                <button style={{ cursor: "pointer"}} onClick={() => this.increase()}>
                    Increase
                </button>
                
                <button style={{ cursor: "pointer"}} onClick={() => this.decrease()}>
                    Decrease
                </button>
            </div>
        )
    }
}

export default Counter;