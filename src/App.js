import React from "react";
import "./styles/font.css"
import "./styles/grid.css";
import "./styles/custom.css";
import "./styles/App.css";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row main">
          <div className="col-12">
            <input type="text" placeholder="location" />
          </div>

          <div className="col-12 description">
            <div className="col-6 desc-item degree">
              <p>Miami</p>
              <h1>79°F</h1>
            </div>
            <div className="col-6 desc-item clouds">
              <p>Clouds</p>
            </div>
          </div>
        </div>
        <footer className="row">
          <div className="col-10 d-flex footer-container">
            <div className="col-4 footer-items">
              <h4>79°F</h4>
              <p>Feels Like</p>
            </div>
            <div className="col-4 footer-items">
              <h4>40%</h4>
              <p>Humidity</p>
            </div>
            <div className="col-4 footer-items">
              <h4>2 MPH</h4>
              <p>Winds</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
