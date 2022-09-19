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
            className="mui--appbar-height mui--text-display1"
          >
            Footer
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
