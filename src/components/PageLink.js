import React from "react";

const PageLink = ({link, itemClass}) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.name}
      </a>
    </li>
  );
};

export default PageLink;
