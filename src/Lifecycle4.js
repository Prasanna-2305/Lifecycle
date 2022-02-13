import React, { Component } from 'react'

export default class Lifecycle4 extends Component {
    constructor()
    {
        super();
        this.state={
            counter:0
        }
    }
    shouldComponentUpdate(){
        console.warn("method",this.state.counter);
        if(this.state.counter>5 && this.state.counter<10)
        {
        return true;
        }
    }
  render() {
    return (
      <div>
          <p>Update{this.state.counter}</p>
          <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>increse</button>
      </div>
    )
  }
}
