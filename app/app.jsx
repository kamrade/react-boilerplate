var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Denis',
	location: 'Vladivostok'
};

var objTwo = {
	age: 34,
	...objOne
};

if (NODE_ENV == 'development') {
	console.log('NODE_ENV == development');
}

if (NODE_ENV == 'production') {
	console.log('NODE_ENV == production');
}

console.log(objTwo);

ReactDOM.render(
	<h1>React boilerplate</h1>,
	document.getElementById('app')
);
