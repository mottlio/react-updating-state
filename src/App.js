import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>
        Hobbies: {props.hobbies.join(", ")}
      </h4>
    </li>
  );
}

// we can't use a static because this is not a class, it's just a property:

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
};




//Below has been transformed into a stateless functional component (above):

// class InstructorItem extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     hobbies: PropTypes.arrayOf(PropTypes.string)
//   }
//   render() {
//     return (
//       <li>
//         <h3>{this.props.name}</h3>
//         <h4>
//           Hobbies: {this.props.hobbies.join(", ")}
//         </h4>
//       </li>
//     );
//   }
// }

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

//IN CONTRAST TO SPLICE, MAP RETURNS A NEW ARRAY WITHOUT MODIFYING THE OLD ONE

      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randomInst) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          };
        }
        return inst;
      });
      
      
      
      // (
      // i === randomInst ? {
      //   ...inst,
      //   hobbies: [...inst.hobbies.slice(0, hobbyIndex).concat(inst.hobbies.slice(hobbyIndex+1, inst.hobbies.length))]
      // } : inst
      // ));
//       instructors[randomInst] = Object.assign({}, instructors[randomInst]);
//       instructors[randomInst].hobbies = instructors[randomInst].hobbies.slice();

// // NOW I CAN DO WHATEVER I WANT WITH IT
//       instructors[randomInst].hobbies.splice(hobbyIndex, 1);
//       this.setState({instructors});
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
        />
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
