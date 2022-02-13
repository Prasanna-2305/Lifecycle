import React from 'react';

export default class Lifecycle2 extends React.Component
{
    constructor(){
        super()
        this.state={
            name:null,
            email:null,
        }
        console.warn("constructor"); 
    }
   componentDidUpdate(){
       console.warn('componentDidUpdate');
       if(this.state.email==null)
       {
           this.setState({email:"pbhagwat@bestpeers.com"})
       }
   }
    render()
    {
        console.warn("render");
        return(
            <div>
                <p>
                    Lifecycle method {this.state.name} {this.state.email}
                </p>
                <button onClick={()=> {this.setState({name:"Prasanna"})}}>activate</button>
            </div>
        )
    }
}