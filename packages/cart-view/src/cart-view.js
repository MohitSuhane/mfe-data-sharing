import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

const CartView = () => {
  const [count, setCount] = useState(store.count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.count);
    });
  }, []);
  return (
    <div className="mui-appbar mui--appbar-line-height">
      <table width="100%">
        <tbody>
          <tr style={{ verticalAlign: 'middle' }}>
            <td
              className="mui--appbar-height mui--text-display1"
              style={{ paddingLeft: '1em' }}
            >
              Cart View
            </td>
            
            <td
              className="mui--appbar-height mui--text-display1"
              align="right"
              style={{ paddingRight: '1em' }}
            >
                <i class="fa" style="font-size:24px">&#xf07a;</i>
                <span class='badge badge-warning' id='lblCartCount'> {count} </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const cartViewLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CartView
});

export const bootstrap = cartViewLifecycles.bootstrap;
export const mount = cartViewLifecycles.mount;
export const unmount = cartViewLifecycles.unmount;
