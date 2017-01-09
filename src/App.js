import React, { Component } from 'react';
import Child from './Child'
import MyButton from './MyButton'

const Films = [
  { title: 'Taxi',
    img : '',
    description: 'une description ......'
  },{
    title: 'Lucie',
    img : '',
    description: 'une description .....dfsdffsd.'
  },{
    title: 'StarGate',
    img : '',
    description: 'une description .....sdfsdff.'
  },{
    title: 'Transformers',
    img : '',
    description: 'une description ....fffff..'
  },{
    title: 'Deep water',
    img : '',
    description: 'une description ......'
  }
]


class App extends Component {

  render() {

    return (
      <div className="App">

        <h1>Un bouton (utilisation des state):</h1>

        <MyButton/>

        <h1>Liste des films (utilisation map et props):</h1>

        {Films.map((film) => {
          return ( <Child title={film.title} height={40} description={film.description}/> )
        })}

      </div>
    );
  }

}

export default App;
