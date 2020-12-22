import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
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
          if (c.id === counter.id) {
              c.value += 1;
              return c;
          }
          return c;
      });

      this.setState({ counters });
  };

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(counter => counter.id !== counterId);
      this.setState({ counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => { c.value=0; return c; });
      this.setState({ counters });
  };

  handleTotalCount = () => {
    let totalCount = 0;
    for (let counter of this.state.counters)
      totalCount += counter.value;
    return totalCount;
  };

  render() {
    return (
      <React.Fragment>
        <Navbar 
          totalCount={this.handleTotalCount()}
        />

        <main className="container my-4">
            <Counters 
              counters={this.state.counters}
              onReset={this.handleReset}
              onIncrement={this.handleIncrement}
              onDelete={this.handleDelete}
            />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
