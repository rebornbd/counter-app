import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("counter prevProps", prevProps);
        // console.log("this.props", this.props.counter.value);
        // console.log("counter coprevState", prevState);
        // console.log("counter snapshot", snapshot);

        if (prevProps.counter.value !== this.props.counter.value) {
            // value changes: do something
            console.log("wtf");
        }
    }

    render() {
        console.log("counter - rendered");

        const { onIncrement, counter, onDelete } = this.props;

        return (
            <div className="my-4">
                <span className={ this.getBadgeClasses() }>{this.formateCount()}</span>
                <button 
                    onClick={() => onIncrement(counter) } 
                    className="btn btn-primary btn-sm m-2">Increment</button>
                <button 
                    onClick={() => onDelete(counter.id) } 
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
