import React, { Component } from 'react';

import Toolbar from './toolbar';
import TextArea from './text-area';
import Preview from './preview';
import DisplayIf from './display-if';
import SvgDefinitions from './svg-definitions';


import "../styles/styles.css";


const toolbarButtons = [
  {
    icon: 'embed2',
    tooltip: 'Format as code block'
  },
  {
    icon: 'link',
    tooltip: 'Format as link'
  },
  {
    icon: 'bold',
    tooltip: 'Bold text'
  },
  {
    icon: 'italic',
    tooltip: 'Italicised text'
  },
  {
    icon: 'quotes-left',
    tooltip: 'Format as quote'
  },
  {
    icon: 'list2',
    tooltip: 'Format as unordered list'
  },
  {
    icon: 'list-numbered',
    tooltip: 'Format as ordered list'
  }
];

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inEditMode: true,
      showHTML: false,
      content: "",
    };
  }

  handleOnChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { content, inEditMode, showHTML } = this.state;

    return (
      <div className="md-container">
        <SvgDefinitions />
        <Toolbar
          inEditMode={inEditMode}
          toolbarButtons={toolbarButtons}
          handleToggleEditMode={(val) => this.setState({ inEditMode: val })} />
        <DisplayIf condition={!inEditMode}>
          <Preview
            content={content}
            showHTML={showHTML} />
        </DisplayIf>
        <TextArea
          name={'content'}
          onChange={(event) => this.handleOnChange(event)}
          hidden={!inEditMode}
          value={content} />
        <textarea
          readOnly
          hidden={true}
          value={content} />
      </div>
    );
  }
}
