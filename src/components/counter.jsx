import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() {
        return (
            <React.Fragment>
                <span className={ this.getBadgeClasses() }>{this.formateCount()}</span>
                <button className="btn btn-primary">Increment</button>
                <ul>{ this.getRenderingList() }</ul>
            </React.Fragment>
        );
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
