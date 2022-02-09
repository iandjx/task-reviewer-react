import React from 'react';
import { EUAPILINK } from './prod';

const Popup = () => {
  return (
    <div className="w-[400px] h-[512px]">
      <header>
        <div className="grid place-items-center">
          <a href="https://taskreviewer.com" target="_blank" rel="noreferrer">
            <img
              src={`${EUAPILINK}/assets/images/logo.png`}
              className="h-9 w-auto"
              alt="logo"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Popup;
