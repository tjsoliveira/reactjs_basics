import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Thiago', age: 28 },
      { name: 'Camila', age: 25 }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Racing</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        </p>
      </div>
    );
  }
}

export default App;
