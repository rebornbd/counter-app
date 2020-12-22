import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 5 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 5 },
        ],
    };

    handleIncrement = (counter) => {
        // console.log(counter);
        const counters = this.state.counters.map(c => {
            if (c.id === counter.id)
                return {id: c.id, value: c.value+1};
            return c;
        });

        this.setState({ counters });
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => { return {id: c.id, value: 0}; });
        this.setState({ counters });
    };

    render() { 
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-danger btn-sm">RESET</button>

                { this.state.counters.map(counter => (
                    <Counter 
                        key={counter.id} 
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        counter={counter} />
                ))}
            </div>
        );
    }
}
 
export default Counters;
