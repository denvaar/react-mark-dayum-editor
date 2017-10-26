import React from 'react';


/* always keep this mounted no matter if in edit
 * mode or preview mode so that ctrl-z always works
 */
const TextArea = ({ content, onChange, hidden, ...rest }) => (
  <textarea
    hidden={hidden}
    className="md-textarea"
    onChange={onChange}
    value={content}
    {...rest} />
);

export default TextArea;
