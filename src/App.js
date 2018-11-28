import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview";
import Header from "./Header";
import chatHistory from "./chatHistory.json";

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
