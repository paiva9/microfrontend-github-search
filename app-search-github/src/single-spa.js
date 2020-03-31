import "./styles/global.scss";
import "zone.js";
import * as singleSpa from "single-spa";
import { loadApp } from "./helper";

async function init() {
  const loadingPromises = [];

  const apps = [
    {
      name: "app-search-repositories",
      hash: "/search/repositories",
      appURL: "/search/repositories/singleSpa.js",
      renderEver: false
    },
    {
      name: "app-search-users",
      hash: "/search/users",
      appURL: "/search/users/singleSpa.js",
      renderEver: false
    },
    {
      name: "app-sidebar",
      hash: "/app-sidebar",
      appURL: "/app-sidebar/singleSpa.js",
      renderEver: true
    }
  ];

  apps.map(app => {
    const { name, hash, appURL, renderEver } = app;

    loadingPromises.push(
      loadApp({
        name,
        hash,
        appURL,
        renderEver
      })
    );
  });

  await Promise.all(loadingPromises);
  singleSpa.start();
}

init();
