import React from "react";
import Responsive from "react-responsive";

export const Desktop = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest?: any;
}) => (
  <Responsive {...rest} minWidth={992}>
    {children}
  </Responsive>
);

export const Tablet = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest?: any;
}) => (
  <Responsive {...rest} minWidth={768} maxWidth={991}>
    {children}
  </Responsive>
);

export const Mobile = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest?: any;
}) => (
  <Responsive {...rest} maxWidth={767}>
    {children}
  </Responsive>
);

export const Default = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  rest?: any;
}) => (
  <Responsive {...rest} minWidth={768}>
    {children}
  </Responsive>
);
