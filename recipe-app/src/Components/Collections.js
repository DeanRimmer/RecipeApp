import React from "react";
import "../App.css";

class Collections extends React.Component {
  render() {
    return (
      <div className="CollectionsContainer">
        <div className="Collection">
          <div className="TextContainer">
            <a href="#">
              <h3>Collection</h3>
              <p>Number</p>
              <h4>Subtitle</h4>
            </a>
          </div>
        </div>
        <div className="Collection">
          <div className="TextContainer">
            <a href="#">
              <h3>Collection</h3>
              <p>Number</p>
              <h4>Subtitle</h4>
            </a>
          </div>
        </div>
        <div className="Collection">
          <div className="TextContainer">
            <a href="#">
              <h3>Collection</h3>
              <p>Number</p>
              <h4>Subtitle</h4>
            </a>
          </div>
        </div>
        <div className="Collection">
          <div className="TextContainer">
            <a href="#">
              <h3>Collection</h3>
              <p>Number</p>
              <h4>Subtitle</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Collections;
