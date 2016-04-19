import React from "react";
export default class Header extends React.Component {
	render() {
		return (
			<div className="full-width">
				<header><a href="index.html" id="logo1"><img alt="180 Church" src="./resources/logo.png" /></a>
				<nav>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="times-locations.html">Times &amp; Locations</a></li>
					<li><a href="watch.html">Watch</a></li>
					<li><a href="small-groups.html">Small Groups</a></li>
					<li><a href="resources.html">Resources</a></li>
					<li><a href="give.html">Give</a></li>
					<li><a href="about.html">About</a></li>
				</ul>
				</nav>
				</header>
			</div>
		);
	}
}
