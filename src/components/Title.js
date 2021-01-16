import React, { Component } from 'react';


export default class Title extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
          <div>{this.props.title}</div>
		)
	}
}

