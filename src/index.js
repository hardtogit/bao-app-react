import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//坑人键盘专用
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/jquery.js');
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/microdoneH5.min.js');
//require('!file-loader?name=static/js/[name].[ext]!./assets/lib/doneConfig.js');
require('!file-loader?name=static/css/[name].[ext]!./css/microdone-h5.css');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/123.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/123_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/anjian.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/anjian_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/DEL.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/delete_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/delete_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji_left.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji_right.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/done_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/header_logo.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/logo.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_D.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_DS.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/space.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/space_2.svg');
import LoadingExamples from '../src/components/Loading/example'
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
