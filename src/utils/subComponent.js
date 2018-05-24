import React from 'react';
import PropTypes from 'prop-types';

export default (displayName, baseTag, baseClass) => {
  const Comp = ({
    tag = baseTag,
    className,
    ...props,
  }) => React.createElement(tag, {
    className: `${baseClass}${className ? ` ${className}` : ''}`,
    ...props,
  });

  Comp.displayName = displayName;

  Comp.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
  };
  return Comp;
};
