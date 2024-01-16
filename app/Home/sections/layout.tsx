import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  id: string;
  className?: string;
}

const HomeSectionLayout = ({ id, className, children, ...rest }: Props) => {
  return (
    <section
      id={id}
      className={`home-section flex flex-col items-center ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default HomeSectionLayout;
