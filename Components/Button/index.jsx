import React from "react";
import { Button } from "./style";

function ButtonComponent({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default ButtonComponent;
