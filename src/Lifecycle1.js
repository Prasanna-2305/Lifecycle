import React from 'react';

export default class Lifecycle1 extends React.Component
{
    constructor(){
        super()
        this.state={
            data:null,
        }
        console.warn("constructor"); 
    }
    componentDidMount()
    {
        this.setState({data:'updated'})
        console.warn("componentDidMount");
    }
    render()
    {
        console.warn("render");
        return(
            <div>
                <p>
                    Lifecycle method
                </p>
            </div>
        )
    }
}