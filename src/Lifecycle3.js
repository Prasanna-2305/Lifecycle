import React, { Component } from 'react'

export default class Lifecycle3 extends Component {
    componentWillUnmount(){
        alert("Deleted!");
    }
  render() {
    return (
      <div>
          <ul>
              <li>Name:Prasanna</li>
              <li>Email:pbhagwat@bestpeers.com</li>
              <li>Contact:7389738511</li>
              
          </ul>
      </div>
    )
  }
}
