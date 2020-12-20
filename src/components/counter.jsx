import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
    };

    render() {
        // console.log("props: ", this.props);

        return (
            <div className="my-2">
                <span className={ this.getBadgeClasses() }>{this.formateCount()}</span>
                <button onClick={ this.handleIncrement } className="btn btn-primary btn-sm">Increment</button>
            </div>
        );
    };

    handleIncrement = () => {
        const myCount = this.state.count;
        this.setState({ count: myCount+1 });
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formateCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
