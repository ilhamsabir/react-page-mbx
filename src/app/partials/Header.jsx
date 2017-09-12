import React from "react";

class Header extends React.Component {
  render() {
      return (
          <nav className="navbar">
            <div className="navbar-brand">
              <a className="navbar-item" href="http://bulma.io">
                Bulma
              </a>        
              <div className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav> 
      );
  }
}

export default Header;
