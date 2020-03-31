import * as singleSpa from "single-spa"; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156

export function hashPrefix({ prefix, renderEver }) {
  return function(location) {
    if (renderEver) {
      return true;
    }
    return location.hash.startsWith(`#${prefix}`);
  };
}

export async function loadApp({ name, hash, appURL, renderEver }) {
  singleSpa.registerApplication(
    name,
    () => SystemJS.import(appURL),
    hashPrefix({ prefix: hash, renderEver })
  );
}
