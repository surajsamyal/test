import React from "react";
export default class propclasscomp extends React.Component{

    render(){
        return(
            <div className="bgcolor test">
                <h1>{this.props.data}</h1>
                <h3>{this.props.text.name}</h3>
            </div>
        )
    }
}
