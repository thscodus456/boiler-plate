// app.js
const express = require('express');
const app = express();
const port = 5000;
const connection = require('./db');  // db.js에서 연결을 가져옴

app.get("/", (req, res) => {
    res.send("홈페이지 입니다.");
});

app.listen(port, () => {
    console.log("서버 시작");
});

// 서버 종료 시 연결 종료 처리
process.on('SIGINT', () => {
    console.log("서버 종료 중...");
    connection.end((err) => {
        if (err) {
            console.error("연결 종료 중 오류 발생:", err);
        } else {
            console.log("MariaDB 연결 종료");
        }
        process.exit(0);  // 서버 종료 후 프로세스 종료
    });
});
