import React from "react";
import $ from "jquery";

export default class Signup extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		email: "",
    		password: ""
    	}
    	this.submit = this.submit.bind(this);
    	this.handleEmailChange = this.handleEmailChange.bind(this);
  	}
	submit(e) {
		e.preventDefault();
		var data = {
			email: this.state.email
		}
		var that = this;
		$.ajax({
			type: 'POST',
			url: '//localhost:3000/users/register/',
			data: data
		})
		.done(function (data) {
			console.log(data);
			that.state.result = data;
		})
		.fail(function (err) {
			console.log(err);
		});
	}
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	handlePasswordChange(e) {
		this.setState({password: e.target.value});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					email:
					<input type="text" name="email" onChange={this.handleEmailChange}/>
					password:
					<input type="text" name="password" onChange={this.handlePasswordChange}/>
					<input type="submit" value="Submit"/>
				</form>
				<p>{this.state.result}</p>
			</div>
		);
	}
}
