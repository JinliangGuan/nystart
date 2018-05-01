// ------------------Greeter.js--------------------
// var config = require('./config.json');
// module.exports = function() {
//     var greet = document.createElement('h2');
//     greet.textContent = config.greentText;
//     return greet;
//   }

import React,{Component} from 'react';
import config from './config.json';

import style from './Greeter.css'

class Greeter extends Component{
    render(){
      return(
        <h2 className={style.root}>
          {config.greetText}
        </h2>
      )
    }
}

export default Greeter;
