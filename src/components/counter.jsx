import React, { Component } from 'react';

class Counter extends Component {
    // method: 01 (Binding Event Handlers)
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement() {
    //     console.log("clicked", this);
    // }

    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() {
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{this.formateCount()}</span>
                <button onClick={ this.handleIncrement } className="btn btn-primary">Increment</button>
                <ul>{ this.getRenderingList() }</ul>
            </React.Fragment>
        );
    };

    // method: 02 (Binding Event Handlers)
    handleIncrement = () => {
        const myCount = this.state.count;
        this.setState({ count: myCount+1 });
    };

    getRenderingList() {
        let newList = this.state.tags.map(tag => <li key={tag}>{ tag.toLocaleUpperCase() }</li>);
        return newList;
    }

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
