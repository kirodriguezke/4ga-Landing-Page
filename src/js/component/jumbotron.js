import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<>
			<div className="jumbotron text-justify bg-cover">
				<h1 className="display-4">{props.title}</h1>
				<p className="lead">
					I fell in love the way you fall asleep: slowly, and then all
					at once.
				</p>
				<a
					className="btn btn-light btn-lg"
					target="_blank"
					href={props.urlJumbutton}
					role="button">
					Call to action!
				</a>
			</div>
			<div className="alert alert-secondary">
				<strong>
					In this landpage you can find the true story of two lovers.
				</strong>
			</div>
		</>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	urlJumbutton: PropTypes.string
};
