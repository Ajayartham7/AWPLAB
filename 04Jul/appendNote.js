const fs = require('fs');
const content = 'Appended on: ' + (new Date()).toLocaleString() + '\n';
fs.appendFile('notes.txt', content, (err) => {
    if (err) {
        console.error(err);
    }
    else{
        console.log('File appended successfully');
    }
});
+













