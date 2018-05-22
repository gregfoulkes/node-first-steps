const greet = require('./greet');
const chalk = require('chalk');
const figlet = require('figlet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));

figlet(greet('Xola'), function(err, data) {
    // if (err) {
    //     console.log('Something went wrong...');
    //     console.dir(err);
    //     return;
    // }
    console.log(data)
});
