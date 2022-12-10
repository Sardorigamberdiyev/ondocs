import { Dispatch, SetStateAction } from "react";

export interface IDocsTableProps {
    tableData: string[];
    checkbox?: boolean;
    checkedAll?: string[];
    setCheckedAll?: Dispatch<SetStateAction<string[]>>;
}