import React, { ReactNode } from "react";

interface Props {
  as?: "p" | "span";
  className?: string;
  children?: ReactNode;
}

const Typography = ({ children, className, as, ...rest }: Props) => {
  const _class = `${className || ""} app-typography`;
  return (
    <>
      {as && as === "span" && (
        <span className={_class} {...rest}>
          {children}
        </span>
      )}
      {(!as || as === "p") && (
        <p className={_class} {...rest}>
          {children}
        </p>
      )}
    </>
  );
};

export default Typography;
