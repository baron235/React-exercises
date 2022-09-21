import { ReactNode } from "react";

interface AlertProps {
  type?: "primary" | "success" | "light";
  children: ReactNode;
}

const Alert = ({ type = "light", children }: AlertProps) => (
  <div className={`alert alert-${type}`} role="alert">
    {children}
  </div>
);

export default Alert;
