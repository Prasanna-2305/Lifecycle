import React, { Component } from 'react'
import Lifecycle3 from './Lifecycle3';
export default class User extends Component {
    constructor()
    {
      super()
      this.state={
        toggle:true
      }
    }
  render() {
    return (
        <div>   
      {
        this.state.toggle?
        <Lifecycle3 />:null
      }
      <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete</button>
    </div>
    )
  }
}
