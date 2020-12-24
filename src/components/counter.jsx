import React, { Component } from 'react';

class Counter extends Component {
    
    render() {
        const { onIncrement, onDecrement, counter, onDelete } = this.props;

        return (
            <div className="row">
                <div className="col-1">
                    <span className={ this.getBadgeClasses() }>
                        {this.formateCount()}
                    </span>
                </div>
                <div className="col">
                    <button 
                        onClick={() => onIncrement(counter) } 
                        className="btn btn-primary btn-sm">+</button>
                    <button 
                        onClick={() => onDecrement(counter) }
                        disabled={counter.value === 0 ? "disabled" : ""}
                        className="btn btn-primary btn-sm m-2">-</button>
                    <button 
                        onClick={() => onDelete(counter.id) } 
                        className="btn btn-danger btn-sm">x</button>
                </div>
            </div>
        );
    };

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { value } = this.props.counter;
        return value === 0 ? "zero" : value;
    }
}

export default Counter;
