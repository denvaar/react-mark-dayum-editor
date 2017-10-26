import React from 'react';


export default ({ condition, children }) => {
  if (condition) {
    if (children.length > 1) return <div>{children}</div>;
    return React.Children.only(children);
  } else {
    return null;
  }
};
