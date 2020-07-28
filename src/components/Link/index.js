import React from 'react';

const Link = props => {
  const { contentState, children, entityKey } = props;
  const { href, url, title } = contentState.getEntity(entityKey).getData();
  return (
    <a href={href || url} title={title}>
      {children}
    </a>
  );
};

export default Link;
