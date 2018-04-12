import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//坑人键盘专用
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/jquery.js');
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/microdone-h5.min.js');
require('!file-loader?name=static/js/[name].[ext]!./assets/lib/doneConfig.js');
require('!file-loader?name=static/css/[name].[ext]!./css/microdone-h5.css');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/123.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/123_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/anjian.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/anjian_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/DEL.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/DEL_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/DEL_H.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/DEL_H_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji_left.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/dianji_right.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/logo.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_D.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_D_H.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_DS.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_DS_H.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shift_H.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shouqi.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shouqi_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_delete1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_delete2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_delete_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_delete_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_logo.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_shouqi_1.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/shuzi_shouqi_2.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/space.svg');
require('!file-loader?name=static/svg/[name].[ext]!./assets/svg/space_2.svg');
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
