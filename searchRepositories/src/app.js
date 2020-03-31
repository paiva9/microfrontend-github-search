import React from "react";
import Home from "./components/Home";

export default class App extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return <Home />;
  }
}
