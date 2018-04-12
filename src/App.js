import React, { Component } from 'react'
import Header from './components/Header'
import Photobox from './components/Photobox'
import Temperature from './components/Temperature'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main>
          <Photobox />
          <Temperature />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
