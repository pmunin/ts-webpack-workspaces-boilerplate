import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Module1Func} from 'my-module1'
import {Module2Func} from 'my-module2'
import {MyTsModule1Function} from 'my-ts-module1'
var myTsModule1 = require('my-ts-module1');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={()=>{
            debugger;
            var m1f = Module1Func();
            var m2f = Module2Func();
            console.log(myTsModule1);
            var tsm1Func = MyTsModule1Function;
            var tsm1 = MyTsModule1Function(123213);


            alert("Hallo world");
          }}>Open Dev Tools and click here</button>
        </p>
      </div>
    );
  }
}

export default App;
