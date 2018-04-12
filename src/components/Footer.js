import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Weather API: <a href="http://marsweather.ingenology.com/">MAAS</a></p>
        <p>Copyright &copy;2018 | Amy Carney</p>
        <ul>
        <li><a href="https://github.com/digilou" aria-label="Follow me on Github" title="Follow me on Github">
          <span className="fa fa-github fa-2x" aria-hidden></span>
          </a>
        </li>
        <li><a href="https://www.linkedin.com/in/carneyamy" aria-label="Connect with me on LinkedIn" title="Connect with me on LinkedIn">
          <span className="fa fa-linkedin fa-2x" aria-hidden></span>
          </a>
        </li>
        <li><a href="https://carneydevelopoit.wordpress.com/" aria-label="Follow me on WordPress" title="Follow me on WordPress">
          <span className="fa fa-wordpress fa-2x" aria-hidden></span>
          </a>
        </li>
        <li><a href="https://twitter.com/click2carney" aria-label="Follow me on Twitter" title="Follow me on Twitter">
          <span className="fa fa-twitter fa-2x" aria-hidden></span>
          </a>
        </li>
        </ul>
    </footer>
    );
  }
}

export default Footer;