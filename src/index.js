import React from "react";
import ReactDOM from "react-dom/client";
import SamuraiJSApp from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let h1 = document.createElement("h1");
// h1.innerHTML = "Hello";
// document.querySelector("body").appendChild(h1);
// setInterval(() => {
//   store.dispatch({ type: "FAKE" });
// }, 1000);

root.render(
  <SamuraiJSApp
  // store={store}
  // appState={state}
  // dispatch={store.dispatch.bind(store)}
  // addPost={store.addPost.bind(store)}
  // onPostChange={store.onPostChange.bind(store)}
  // addMessage={store.addMessage.bind(store)}
  // onMessageChange={store.onMessageChange.bind(store)}
  />
);
