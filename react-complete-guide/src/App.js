import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jason',
      age: '32'
    };
  }

  switchNameHandler = (newName) => {
    this.setState({
      name: 'Jason Portilla',
      age: 30
    })
  }

  nameChangedHandler = (event) => {
     this.setState({
      name: event.target.value,
      age: 30
    })
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
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={ style } 
          onClick={() => this.switchNameHandler('Jason Portilla!!')}>
          Switch Name
        </button>
        <Person 
          name={ this.state.name } 
          age={ this.state.age } 
          click={ this.switchNameHandler }
          changed={ this.nameChangedHandler }
          />
      </div>
    );
  }
}

export default App;
