import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview";
import Header from "./Header";

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
      },
      {
        from: "A",
        timestamp: "100",
        message: "How is it going?"
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
  constructor(props) {
    super(props);
    this.state = {
      conversationShown: -1
    };
  }

  showConversation = id => {
    this.setState({
      conversationShown: id
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {chatHistory.map(chatItem => {
          return (
            <Preview
              key={chatItem.id}
              {...chatItem}
              previewClick={this.showConversation}
              showingConversation
              conversationShown={this.state.conversationShown}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
