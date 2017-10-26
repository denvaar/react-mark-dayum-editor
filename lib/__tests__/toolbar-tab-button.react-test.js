import React from 'react';
import renderer from 'react-test-renderer';

import ToolbarTabButton from '../components/toolbar-tab-button';


it('renders correctly in active state', () => {
  const tree = renderer.create(
    <ToolbarTabButton label={"Write"} activeIf={true} onClick={null} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly in inactive state', () => {
  const tree = renderer.create(
    <ToolbarTabButton label={"Write"} activeIf={false} onClick={null} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
