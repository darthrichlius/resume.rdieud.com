import React, { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Typography = ({ children, className, ...rest }: Props) => {
  return (
    <p className={`${className} app-typography`} {...rest}>
      {children}
    </p>
  );
};

export default Typography;
