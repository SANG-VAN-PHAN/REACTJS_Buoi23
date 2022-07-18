// header + footer + content + sidebar => home => app
import React, { Component } from "react";
import Header from "./header";
import Banner from "./banner";
import Item from "./item";
import Footer from "./footer";
import "./home.css";

// JSX : thành phần mở rộng của Javascript
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <Banner />
          <Item />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
