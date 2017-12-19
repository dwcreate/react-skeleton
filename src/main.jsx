var React = require('react');
var createReactClass = require('create-react-class');
var ReactDom = require('react-dom');
var List = require('./components/List.jsx');

ReactDom.render(<List />, document.getElementById('ingredients'));
