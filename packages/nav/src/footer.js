import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./header.css";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => (
  <div>
    <div className="card text-white bg-dark h5  text-center">
      <div className="card-body">
        <p className="card-text">
          One stop shop for Fresh Fruits, contact us for subscription and follow
          us on{" "}
          <span>
            {" "}
            <img
              className="img-height"
              src="http://localhost:3001/fruit/logos.png"
            />{" "}
          </span>
        </p>
      </div>
    </div>
  </div>
);

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;
