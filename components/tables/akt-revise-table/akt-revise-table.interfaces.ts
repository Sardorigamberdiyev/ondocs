import { ITableRow } from '../akt-revise-table-row/akt-revise-table-row.interfaces';

export interface IBalance {
    ownerDebit: string;
    ownerCredit: string;
    partnerDebit: string;
    partnerCredit: string;
}

export interface ITableData {
    id: string;
    contractNo: string;
    contractDate: Date | null;
    verificationActContracts: ITableRow[];
    openBalance: IBalance;
    closeBalance: IBalance;
    totalBalance: IBalance;
}