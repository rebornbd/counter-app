import React, { Component } from 'react';

class Counter extends Component {

    render() {
        // console.log("props: ", this.props);

        return (
            <div className="my-4">
                {this.props.children}
                <span className={ this.getBadgeClasses() }>{this.formateCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter) } 
                    className="btn btn-primary btn-sm m-2">Increment</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id) } 
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
