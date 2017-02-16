const execSync = require('child_process').execSync

let branches = execSync('git branch')
console.log(branches)
