/*global chrome*/

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  /*render() {
    var historyArray = [];
    chrome.history.search({ text: "", maxResults: 10 }, function(data) {
      data.forEach(function(page) {
        console.log(page.url);
        historyArray.push(page.url);
      });
    });

    const listItems = historyArray.map(historyUrl => <li>{historyUrl}</li>);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bawss!</h1>
          <ul>{listItems}</ul>
        </header>
        <p className="App-intro" />
      </div>
    );
  }*/

  render() {
    var historyArray = ['https://www.okcupid.com/home', 'App.js:34 https://www.facebook.com/','https://www.okcupid.com/home'];
    // chrome.history.search({ text: "", maxResults: 1000 }, function(data) {
    //   data.forEach(function(page) {
    //     console.log(page.url);
    //     historyArray.push(page.url);
    //   });
    // });
    console.log("historyArray: ", historyArray);
    const listItems = historyArray.map(historyUrl => <li>{historyUrl}</li>);
    console.log("ListItems: ", listItems);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Bawss!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ul>{listItems}</ul>
        </p>
      </div>
    );
  }

  getHistory() {
    var historyArray = [];
    chrome.history.search({ text: "", maxResults: 1000 }, function(data) {
      data.forEach(function(page) {
        console.log(page.url);
        historyArray.push(page.url);
      });
    });
    return historyArray;
  }
}

export default App;
