var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('./components/Homepage');

var mountNode = document.getElementById("content");
ReactDOM.render(new Homepage({}), mountNode);
