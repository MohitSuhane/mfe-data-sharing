import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './header.css';
import store from 'store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [count, setCount] = useState(store.count);
  const [fruit, setFruit] = useState(store.fruit);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
      setFruit(store.fruit);
    });
  }, []);
  function handleClick(){
    const customEvent = new CustomEvent('message', { detail: fruit });
    window.dispatchEvent(customEvent)
  }
  return (
    <div className="mui-appbar mui--appbar-line-height">
      <table width="100%">
        <tbody>
          <tr className="td-middle">
            <td
              className="mui--appbar-height mui--text-headline"
            >
              <img src="http://localhost:3001/fruit/FruiWala.png" />
            </td>
            
            <td
              className="mui--appbar-height mui--text-display1"
              align="right" 
            >
                <FontAwesomeIcon icon={faCartShopping} onClick={handleClick} className="cart-icon" />
                {/* <i className="fa fa-cart-shopping" style={{fontSize:24}}  /> */}
                <span className='badge badge-warning' id='lblCartCount'> {count} </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
