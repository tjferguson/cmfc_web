import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview";
import Header from './Header'

const chatHistory = [
  {
    id: 1,
    sponsor: "A",
    sponsored: "B",
    messages: [
      {
        from: "A",
        timestamp: "100",
        message: "Hello"
      }
    ]
  },
  {
    id: 2,
    sponsor: "C",
    sponsored: "D",
    messages: [
      {
        from: "D",
        timestamp: "150",
        message: "Good bye"
      }
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        {chatHistory.map(chatItem => {
          return <Preview key={chatItem.id} {...chatItem} />;
        })}
      </div>
    );
  }
}

export default App;
