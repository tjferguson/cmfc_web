import React, { Component } from "react";
import "./App.css";
import Preview from "./Preview";
import Header from "./Header";
import { queryTable } from "./database";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversationShown: -1,
      chatHistory: []
    };
  }

  updateData = data => {
    this.setState({ chatHistory: data });
  };

  async componentDidMount() {
    const chatHistory = await queryTable(this.updateData);
    this.setState({
      chatHistory
    });
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
        {this.state.chatHistory &&
          this.state.chatHistory.map(chatItem => {
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
