import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IDocsTableRowProps {
    checkboxDisabled?: boolean;
    checkedListValue?: string[];
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: MouseEventHandler<HTMLTableRowElement>;
}