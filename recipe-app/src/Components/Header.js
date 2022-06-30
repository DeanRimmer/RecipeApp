import React from "react";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="topnav">
        <div className="options">
          <a href="#Appetisers">Appetisers</a>
          <a href="#Breakfast">Breakfast</a>
          <a href="#Main">Main</a>
          <a href="#Desserts">Desserts</a>
          <a href="#Drinks">Drinks</a>
        </div>
        <div className="profile">
          <a href="#profile">profile and info</a>
        </div>
      </div>
    );
  }
}

export default Header;
