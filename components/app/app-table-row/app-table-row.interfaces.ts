import { MouseEventHandler } from "react";

export interface IAppTableRowProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLTableRowElement>;
}