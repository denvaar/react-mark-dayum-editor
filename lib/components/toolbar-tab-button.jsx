import React from 'react';


const ToolbarTabButton = ({ label, activeIf, onClick }) => {
  const baseCSS = 'md-toolbar-tablinks';

  return (
    <button
      type={"button"}
      className={activeIf ? `${baseCSS} active` : baseCSS}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default ToolbarTabButton;
