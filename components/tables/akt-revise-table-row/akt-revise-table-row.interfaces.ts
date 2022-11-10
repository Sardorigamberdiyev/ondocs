
export interface ITableRow {
    id: string;
    ownerOperationDate: Date | null;
    ownerOperationName: string;
    ownerDebit: string;
    ownerCredit: string;
    partnerOperationDate: Date | null;
    partnerOperationName: string;
}

export interface IAktReviseTableRowProps {
    rowId: string;
    getRowDate?: (rowData: ITableRow) => void;
}