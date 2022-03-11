//import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Inanima from '../pics/Inanima.png';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main className="App">
        <Header></Header>
        <section className="body">
          <img src={Inanima} className="artwork" alt="artwork" />
          <div className="title-box">

            <p className="title">
              PHIBBER
              {/* Chuck Morris - new app boiler */}
            </p>
          </div>
          <div className="login-or-link">
            <a
              className="App-link"
              href="soundcloud.com/phibber"
              target="_blank"
              rel="noopener noreferrer"
            >Whistle While you Work
            </a>
          </div>
          <div className="petal">

            <p className="title">
              Init commit
            </p>
          </div>
        </section>
        <Footer></Footer>
      </main>
    );
  }
}
export default App;
