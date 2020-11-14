import React from "react";

export interface IButton {
  children: React.ReactNode;
}
/** Simple button */
export const Button = ({ children }: IButton) => {
  return <button type="button">{children}</button>;
};
