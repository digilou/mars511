import React, { Component } from 'react';
// import HeaderContainer from './components/Header'
// import Search from './components/Search'
// import Container from './components/Places'
// import Wiki from './components/Description'
// import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Mars<span>511</span></h1>
        </header>
        <main>
          <div id="image-box">
            <div id="image"></div>
          </div>
          <div id="forecast">
            <div id="day"></div>
            <div id="temp"></div>
              <label class="active" for="f">&deg;F</label>
              <input type="radio" name="temp_select" id="f" checked />
              <label for="c">&deg;C</label>
              <input type="radio" name="temp_select" id="c" />
            <div id="atmo"></div>
          </div>
        </main>
          
        <footer>
            <p>Weather API: <a href="http://marsweather.ingenology.com/">MAAS</a></p>
            <p>Copyright &copy;2018 | Amy Carney</p>
            <ul>
            <li><a href="https://github.com/digilou">
              <i class="fa fa-github fa-fw"></i>
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/carneyamy">
              <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li><a href="https://carneydevelopoit.wordpress.com/">
              <i class="fa fa-wordpress"></i>
              </a>
            </li>
            <li><a href="https://www.freecodecamp.com/digilou">
              (<i class="fa fa-fire fa-fw"></i>)
              </a>
            </li>
            </ul>
        </footer>
      </div>
    );
  }
}

export default App;
