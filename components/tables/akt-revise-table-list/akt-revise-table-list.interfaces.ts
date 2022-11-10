import { ITableData } from "../akt-revise-table/akt-revise-table.interfaces";

export interface IAktReviseTableListProps {
    getAktTableData?: (aktTableData: ITableData[]) => void;
}
