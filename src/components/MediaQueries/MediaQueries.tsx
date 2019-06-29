import React from "react";
import Responsive from "react-responsive";

interface IMediaQueryProps {
  children: React.ReactNode;
  rest?: unknown;
}

export const Desktop = ({ children, ...rest }: IMediaQueryProps) => (
  <Responsive {...rest} minWidth={992}>
    {children}
  </Responsive>
);

export const Tablet = ({ children, ...rest }: IMediaQueryProps) => (
  <Responsive {...rest} minWidth={768} maxWidth={991}>
    {children}
  </Responsive>
);

export const Mobile = ({ children, ...rest }: IMediaQueryProps) => (
  <Responsive {...rest} maxWidth={767}>
    {children}
  </Responsive>
);

export const Default = ({ children, ...rest }: IMediaQueryProps) => (
  <Responsive {...rest} minWidth={768}>
    {children}
  </Responsive>
);
