import test from './test'
import './main.css'

const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

console.log(test)
