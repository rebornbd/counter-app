import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200"
    };

    mystyle = {
        fontSize: 10,
        fontWeight: 'bold'
    };

    render() {
        return (
            <React.Fragment>
                <img style={{ width:100, height:50, margin:10 }} src={this.state.imageUrl} alt=""/>
                <span style={ this.mystyle } className="badge badge-warning">{this.formateCount()}</span>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>
        );
    };

    formateCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
