const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created');
    }

    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const logContent = `This is log file ${i}\nCreated on: ${new Date().toISOString()}\nStudent ID: 101533701`;

        fs.writeFileSync(fileName, logContent);
        console.log(fileName);
    }
}

createLogs();