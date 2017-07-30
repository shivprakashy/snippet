const fs = require('fs');
fs.readFile('./index.html', 'utf-8', fileReader);
function fileReader(err, data){
console.log(data);
};