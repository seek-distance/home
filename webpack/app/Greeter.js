var config=require('./config.json');
module.exports = function () {
    var greet = document.createElement('div');
    console.log(111)
    greet.textContent = config.greetText;
    return greet;
};