import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

const CartView = () => {
  const [fruit, setFruit] = useState(store.fruit);
  const handleNewMessage = (event) => {
    setFruit([...event.detail]);
  };

  useEffect(() => {  
    window.addEventListener('message', handleNewMessage);

    return () => {
      window.removeEventListener('message', handleNewMessage)
    }
  }, [handleNewMessage]);  
  return (
    <div className="mui-panel">
      <table width="100%">
        <tbody>
          <tr style={{ verticalAlign: 'middle' }}>
            <td
              className="text-align: center;"
              style={{ paddingLeft: '1em', fontWeight: 'bold' }}
            >
              Cart View
            </td>
          </tr>
          {fruit.map((item) => (
            <tr style={{ verticalAlign: 'middle' }}>
              <td className="text-align: center;"
              style={{ paddingLeft: '1em', paddingTop: '5px' }}
              > 
                { item.name }
              </td>
            </tr>
          ))}
          
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
