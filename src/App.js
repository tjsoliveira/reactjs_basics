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

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!')
    //DONT DO THIS this.state.persons[0].name = 'Thiago Oliveira';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Camila Dantas', age: 25 }
      ]})
  }

  nameChangeHandler = (event) => {
   this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Camila', age: 25 }
      ]}) 
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Thiago Oliveira')}>
            Change Name
            </button>
          <Person
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Thiago Oliveira')}
            changed={this.nameChangeHandler}>My Hobbies: Racing
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler}>
            </Person>
        </p>
      </div>
    );
  }
}

export default App;
