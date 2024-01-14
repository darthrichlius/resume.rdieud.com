import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Typography = ({ children, className, ...rest }: Props) => {
  return (
    <p
      className={`${className} tracking-wide [word-spacing:0.065em]`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Typography;
