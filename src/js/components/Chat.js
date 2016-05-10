import React from "react";
import $ from "jquery";
import io from "socket.io";

export default class Chat extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		msg: ""
    	}
    	this.submit = this.submit.bind(this);
    	this.handleMSGChange = this.handleMSGChange.bind(this);
    	this.socket = io();
  	}
	submit(e) {
		e.preventDefault();
		var that = this;
		this.socket.emit('chat', that.state.msg);
		this.setState({msg: ""});
		// $.ajax({
		// 	type: 'POST',
		// 	url: '//localhost:3000/users/addToList/',
		// 	data: data
		// })
		// .done(function (data) {
		// 	if (data.code == -100) {
		// 		that.setState({message: "Invalid Email Address"});
		// 	} else if (data.email) {
		// 		that.setState({message: `Email sent to: ${data.email}`});
		// 	} else if (data.code == 11000) {
		// 		that.setState({message: `Duplicate email address`});
		// 	} else {
		// 		that.setState({message: "Unknown error"});
		// 		console.log(JSON.stringify(data, null, 4));
		// 	}
		// })
		// .fail(function (err) {
		// 	that.setState({message: "err"});
		// });
	}
	handleMSGChange(e) {
		this.setState({msg: e.target.value});
	}
	render() {
		return (
			<div>
				<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
				<ul id="messages"></ul>
			    <form onSubmit={this.submit}>
			      <input id="m" autocomplete="off" type="text" name="msg" onChange={this.handleMSGChange} />
			      <input type="submit" value="Submit"/>
			    </form>
			</div>
		);
	}
}
