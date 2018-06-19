import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      const randomInst = Math.floor(Math.random() * this.state.instructors.length);
      const hobbyIndex = Math.floor(
        Math.random() * this.state.instructors[randomInst].length);

// MAKE A NEW VERSION OF THE OLD DATA - DO NOT MODIFY STATE!!!

      const instructors = this.state.instructors.slice();
      instructors[randomInst] = Object.assign({}, instructors[randomInst]);
      instructors[randomInst].hobbies = instructors[randomInst].hobbies.slice();

// NOW I CAN DO WHATEVER I WANT WITH IT
      instructors[radomInst].hobbies.splice(hobbyIndex, 1)
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
