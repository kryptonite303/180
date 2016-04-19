import React from "react";
import $ from "jquery";

export default class Mail extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		email: "",
    		message: ""
    	}
    	this.submit = this.submit.bind(this);
    	this.handleEmailChange = this.handleEmailChange.bind(this);
    	this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    	this.handleLastNameChange = this.handleLastNameChange.bind(this);
  	}
	submit(e) {
		e.preventDefault();
		var that = this;
		var data = {
			email: this.state.email,
			firstname: this.state.firstname,
			lastname: this.state.lastname,
		}
		var that = this;
		$.ajax({
			type: 'POST',
			url: '//localhost:3000/users/addToList/',
			data: data
		})
		.done(function (data) {
			if (data.code == -100) {
				that.setState({message: "Invalid Email Address"});
			} else if (data.email) {
				that.setState({message: `Email sent to: ${data.email}`});
			} else if (data.code == 11000) {
				that.setState({message: `Duplicate email address`});
			} else {
				that.setState({message: "Unknown error"});
				console.log(JSON.stringify(data, null, 4));
			}
		})
		.fail(function (err) {
			that.setState({message: "err"});
		});
	}
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	handleFirstNameChange(e) {
		this.setState({firstname: e.target.value});
	}
	handleLastNameChange(e) {
		this.setState({lastname: e.target.value});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					email:
					<input type="text" name="email" onChange={this.handleEmailChange}/><br></br>
					first name:
					<input type="text" name="firstname" onChange={this.handleFirstNameChange}/><br></br>
					last name:
					<input type="text" name="lastname" onChange={this.handleLastNameChange}/><br></br>
					<input type="submit" value="Submit"/>
				</form>
				<p>{this.state.message}</p>
			</div>
		);
	}
}
