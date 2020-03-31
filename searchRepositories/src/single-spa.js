import React from "react";
import ReactDOM from "react-dom";

import singleSpaReact from "single-spa-react";

import App from "./app.js";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  let el = document.getElementById("searchRepositories");
  if (!el) {
    el = document.createElement("div");
    el.id = "searchRepositories";
    document.getElementById("apps").appendChild(el);
  }
  return el;
}
