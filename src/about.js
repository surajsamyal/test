import React from 'react'
export default class about extends React.Component{
    constructor(){
      super()
      this.state={
        data: null
      }
      console.warn("constructor")
    }

    componentDidMount(){
      this.setState({data:"updated"})
      console.warn("componentDidMount")
    }
    render(){
      console.warn("render")
        return(
          <div className="bgcolor test">
            <h1>Life Cycle Methodes</h1>
          
          </div>

        )
    }
}