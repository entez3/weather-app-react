import React, { useState } from "react";
import "./styles/responsive.css";
import "./styles/custom.css";
import "./styles/App.css";
import Api from "./api/Api";
import CityInput from "./components/CityInput";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("tehran");

  return (
    <div className="app">
      <Api data={data} setData={setData} location={location} setLocation={setLocation} />
      <div className="container">
        <header className="row">
          <CityInput location={location} setLocation={setLocation} />
        </header>
      </div>
    </div>
  );
};

export default App;
