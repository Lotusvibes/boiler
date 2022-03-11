//import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Inanima from '../pics/Inanima.png';
import landscape from '../pics/landscape.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className="App">
        <Header></Header>
        <section className="body">
          <img src={Inanima} className="artwork" alt="artwork" />
          <img src={landscape} className="landscape" alt="landscape art" />
          <div className="login-or-link">
            <a
              className="App-link"
              href="https://soundcloud.com/plaid/cord-mix"
              target="_blank"
              rel="noopener noreferrer"
            >Whistle While you Work
            </a>
          </div>
          <div className="title-box">
            <p className="title">
              Chuck's app boiler
            </p>
          </div>
        </section>
        <Footer></Footer>
      </main>
    );
  }
}
export default App;
