import React, { Component } from 'react';
    
    
class First extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            clickAge: this.props.age
        //this.incrementAge = this.incrementAge.bind(this)
      }
    }
      clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
            //clickAge: this.props.age
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstname} {this.props.lastname}</h1>
                <p>Age: {this.state.clickAge} , Hair Color: {this.props.hair}</p>
                <button onClick={this.clickHandler}>Birthday button for {this.props.firstname} {this.props.lastname}</button>
            </div>
        );
    }
}

    
export default First;