import React from 'react';


export default ({ condition, children, ...rest }) => {
  if (condition) {
    if (children.length > 1) return <div {...rest}>{children}</div>;
    return React.Children.only(children);
  } else {
    return null;
  }
};
