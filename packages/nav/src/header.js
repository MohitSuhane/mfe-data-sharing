import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './header.css';
import store from 'store/store';

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
              className="mui--appbar-height mui--text-display1"
            >
              Header
            </td>
            
            <td
              className="mui--appbar-height mui--text-display1"
              align="right" 
            >
                <i className="fa fa-cart-shopping" style={{fontSize:24}} onClick={handleClick}> &#xf07a; </i>
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
