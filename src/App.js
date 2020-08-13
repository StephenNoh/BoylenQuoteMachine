import React, { Component } from 'react';
import './App.css';
import Header from "./Header"
import boylenQuotes from "./boylenQuotes"

class App extends Component {
  constructor() {
    super()
    this.state = {
      quote: boylenQuotes
    }
  this.handleClick = this.handleClick.bind(this)
}
    
  handleClick() {
      this.setState({
        quote: boylenQuotes

      })
  }
  render() {
    return (
      <div className="App" id="quote-box">
        <Header />
       
        <p id="new-quote">"{this.state.quote[Math.floor(Math.random() * 43)]}"</p>
        <button onClick={this.handleClick}>Click for a new Boylenism</button>

      
    </div>
  );  
  }
}

export default App;
