import React from 'react';

import DisplayIf from './display-if';
import ToolbarButton from './toolbar-button';
import Tabs from './tabs';


const Toolbar = ({ handleToggleEditMode, inEditMode, toolbarButtons }) => {
  return (
    <nav className="md-toolbar">
      <Tabs
        inEditMode={inEditMode}
        handleClick={handleToggleEditMode} />
      <DisplayIf condition={inEditMode} className="md-toolbar-buttons-container">
        {
          toolbarButtons.map(obj =>
            <ToolbarButton
              key={obj.icon}
              {...obj} />
          )
        }
        <div className="md-toolbar-button-filler" />
      </DisplayIf>
    </nav>
  );
};

export default Toolbar;
