import React, { Component } from 'react';
import Items from './Items.js';
import AddItem from './ItemForm.js';
class App extends Component {

  state =
  {
      items : [ {name: 'Daylight 1w', price: '$15', itemId : 1},
      {name: 'Daylight 10w', price: '$25', itemId : 2},
      {name: 'Daylight 100w', price: '$35', itemId : 3}

      ]
  }

  render() { return (
    <div className="App">
    <h1> Welcome to the shopping mart </h1>
    <Items items = {this.state.items} />
    
    </div>
  );
  }
}

export default App;
