import React from "react";
import Mail from "./Mail";
import Chat from "./Chat";
import Login from "./Login";
export default class Body extends React.Component {
	render() {
		return (
			<div>
				<Mail/>
				<Chat/>
			</div>
		);
	}
}
