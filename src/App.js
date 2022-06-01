import React, { Component } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
