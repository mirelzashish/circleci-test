import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
