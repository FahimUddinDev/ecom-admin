import React from "react";

const MockedNextLink = ({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return React.createElement(
    "a",
    {
      href,
      ...props,
    },
    children,
  );
};

export default MockedNextLink;
