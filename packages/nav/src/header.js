import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./header.css";
import store from "store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  const [count, setCount] = useState(store.count);
  const [fruit, setFruit] = useState(store.fruit);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
      setFruit(store.fruit);
    });
  }, []);
  function handleClick() {
    const customEvent = new CustomEvent("message", { detail: fruit });
    window.dispatchEvent(customEvent);
  }
  return (
    <>
      <nav className="navbar navbar-lg bg-dark text-white">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src="http://localhost:3001/fruit/FruiWala.png"
          />
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={handleClick}
              className="cart-shoping-icon"
              size="3x"
            />

            <span
              id="lblCartCount"
              className="translate-middle badge rounded-pill bg-danger"
            >
              {count} <span class="visually-hidden">items</span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
