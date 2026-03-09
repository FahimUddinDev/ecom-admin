import React from "react";

const MockedNextImage = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return React.createElement("img", {
    src,
    alt,
    ...props,
  });
};

export default MockedNextImage;
