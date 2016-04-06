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
  	}
	submit(e) {
		e.preventDefault();
		var data = {
			email: this.state.email
		}

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/',
			headers: {
				"Access-Control-Allow-Origin": "http://localhost:3000"
			},
			data: data
		})
		.done(function (data) {
			setState({message: data});
		})
		.fail(function (err) {
			setState({message: err});
		});
	}
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.submit}>
					email:
					<input type="text" name="email" onChange={this.handleEmailChange}/>
					<input type="submit" value="Submit"/>
				</form>
				<p>{this.state.message}</p>
			</div>
		);
	}
}
