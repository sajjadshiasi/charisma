import { ReactNode } from "react";

export interface IBoxProps {
  children: ReactNode;
  varient: "data" | "select";
  value?: string;
  onChange?: any;
}
