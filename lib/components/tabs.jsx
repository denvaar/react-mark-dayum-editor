import React from 'react';

import ToolbarTabButton from './toolbar-tab-button';


const Tabs = ({ inEditMode, handleClick }) => (
  <div className="md-toolbar-tabs">
    <ToolbarTabButton
      label={"Write"}
      onClick={() => handleClick(true)}
      activeIf={inEditMode} />
    <ToolbarTabButton
      label={"Preview"}
      onClick={() => handleClick(false)}
      activeIf={!inEditMode} />
  </div>
);

export default Tabs;
