import { IProduct } from '../../../../features/invoice-data/invoice-data.types';


export interface IInvoiceTableRowProps {
    index: number;
    product: IProduct;
    hasExcise: boolean;
    hasLgota: boolean;
    hasCommittent: boolean;
    hasMedical: boolean;
    onlyView?: boolean;
}