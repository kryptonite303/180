import React from "react";
import $ from "jquery";
import FacebookLogin from 'react-facebook-login';

export default class Login extends React.Component {
	constructor(props) {
    	super(props);
    	this.responseFacebook = this.responseFacebook.bind(this);
  	}
	responseFacebook(response) {
		console.log(response);
	}
	render() {
		return (
			<div>
				<FacebookLogin
				    appId="1023662057705816"
				    autoLoad={true}
				    callback={this.responseFacebook} />
				{this.props.text}
			</div>
		);
	}
}
