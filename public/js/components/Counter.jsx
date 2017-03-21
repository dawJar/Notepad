import React, { PropTypes, Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
        return (
            <div>
                <h1>react redux test</h1>
                <h2>{ counter }</h2>
                <button onClick={ increment }>+</button>
                {' '}
                <button onClick={ decrement }>-</button>
                {' '}
                <button onClick={ incrementIfOdd }>Increment if odd</button>
                {' '}
                {/*<button onClick={ () => incrementAsync() }>Increment async</button>*/}
            </div>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};

export default Counter;