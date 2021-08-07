const express = require('express')
	, http = require('http');
var router = express.Router();
const app = express();


//app.use('/', indexRouter)
//시작된 서버 객체를 리턴
var server = http.createServer(app).listen(3000, () => {
	console.log('서버가 시작되었습니다. 포트 : 3000');
});
