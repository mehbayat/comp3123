const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        console.log('Removing log files...');

        const files = fs.readdirSync(logsDir);

        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
}

removeLogs();