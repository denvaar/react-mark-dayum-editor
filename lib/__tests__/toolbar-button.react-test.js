import React from 'react';
import renderer from 'react-test-renderer';

import ToolbarButton from '../components/toolbar-button';


it('renders correctly', () => {
  const tree = renderer.create(
    <ToolbarButton tooltip={"tooltip text"} callback={null} icon={"fake-icon"} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
