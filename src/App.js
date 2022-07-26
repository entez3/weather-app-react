import React, { useState } from "react";
import "./styles/custom.css";
import "./styles/App.css";
import Api from "./api/api";
import CityInput from "./components/cityInput";
import ForeCast from "./components/foreCast";
import Description from "./components/description";
import Footer from "./components/footer";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("tehran");

  return (
    <div className="app">
      <Api  setData={setData} location={location} />
      <div className="container">
        <header className="row">
          <CityInput data={data} setLocation={setLocation} />
        </header>
        <main>
          <ForeCast data={data}/>
          <Description data={data}/>
        </main>
        <Footer/>
      </div>
    </div>
  );
};
export default App;
