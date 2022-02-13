import logo from './logo.svg';
import './App.css';
import Lifecycle3 from './Lifecycle3';
import React from 'react';

class App extends React.Component {
  constructor()
{
  super()
  this.state={
    toggle:true
  }
}

  render(){
  return (
    <div className="App">
      <header className="App-header">
    {
      this.state.toggle?
      <Lifecycle3 />:null
    }
    <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete</button>
      </header>
    </div>
  );
  }
}

export default App;
