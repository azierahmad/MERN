import React, { Component } from 'react'

class First extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.firstname} {this.props.lastname}</h1>
                <p>Age: {this.props.age} , Hair Color: {this.props.hair}</p>
            </div>
        )
    }
}

export default First
