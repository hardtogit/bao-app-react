import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//坑人键盘专用
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/jquery.js');
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
