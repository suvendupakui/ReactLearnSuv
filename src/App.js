//react createElement is an object => HTML browser understand
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

//JSX (transpiled before it reaches the JS) - parcel - babel package does
//JSX => babel transpile it to React.createElement = ReactElement-JS Object => HTMLElement(render)
// component composition - keeping one component in another

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
