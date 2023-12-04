import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// import { SamuraiJSApp } from "./App";
// import { createRoot } from "react-dom/client";

// test("renders without crashing", () => {
//   const container = document.createElement("div");
//   const root = createRoot(container);
//   root.render(<SamuraiJSApp tab="home" />);
//   root.unmount();
// });

import SamuraiJSApp from "./App";
import { createRoot } from "react-dom/client";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(<SamuraiJSApp />);
  root.unmount();
});
