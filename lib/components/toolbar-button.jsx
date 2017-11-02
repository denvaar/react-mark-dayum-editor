import React from 'react';


const ToolbarButton = ({ tooltip, callback, icon }) => {
  const baseCSS = 'md-toolbar-button';

  return (
    <button
      type={"button"}
      title={tooltip}
      className={baseCSS}
      onClick={callback}>
      <svg className={`md-icon icon-${icon}`}>
        <use xlinkHref={`#icon-${icon}`}></use>
      </svg>
    </button>
  );
};

export default ToolbarButton;
