import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		return (
			<h2>It works?!</h2>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);