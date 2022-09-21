import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import store from "store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CartView = () => {
  const [fruit, setFruit] = useState(store.fruit);
  const handleNewMessage = (event) => {
    if (event.detail) {
      setFruit([...event.detail]);
      setShow(true);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener("message", handleNewMessage);

    return () => {
      window.removeEventListener("message", handleNewMessage);
    };
  }, [handleNewMessage]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <tbody>
              {fruit.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const cartViewLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CartView,
});

export const bootstrap = cartViewLifecycles.bootstrap;
export const mount = cartViewLifecycles.mount;
export const unmount = cartViewLifecycles.unmount;
