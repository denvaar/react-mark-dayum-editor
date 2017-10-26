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
      <DisplayIf condition={inEditMode}>
        {
          toolbarButtons.map(obj =>
            <ToolbarButton
              key={obj.icon}
              {...obj} />
          )
        }
      </DisplayIf>
    </nav>
  );
};

export default Toolbar;
