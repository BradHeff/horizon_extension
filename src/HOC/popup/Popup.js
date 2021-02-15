import React from 'react';
import './popup.css';

const Popup = (props) => {
  return (
        <div>
           {props.children}
        </div>
  );
}

export default Popup;