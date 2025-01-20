// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'TIGER',
    database: 'practice'
});

connection.connect((err) => {
    if (err) {
        console.error('MariaDB 연결 실패:', err);
        process.exit(1);  // 에러 발생 시 프로세스를 종료
    }
    console.log('MariaDB 연결 성공');
});

module.exports = connection;  // 다른 파일에서 이 연결을 사용할 수 있게 export
