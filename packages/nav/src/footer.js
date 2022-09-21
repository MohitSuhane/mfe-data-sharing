import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './header.css';

const Footer = () => (
  <div className="mui-appbar mui--appbar-line-height">
    <table width="100%">
      <tbody>
        <tr className="td-middle">
          <td
            className="mui--appbar-height mui--text-subhead padding-left"
          >
            <div> 
              <span> One stop shop for Fresh Fruits, contact us for subscription and follow us on</span>
              <span> <img className='img-height' src="http://localhost:3001/fruit/logos.png" /> </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);  

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;
