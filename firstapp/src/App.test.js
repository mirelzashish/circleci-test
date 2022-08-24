import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

it("renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
