import { IInvoiceDataState } from '../../../../features/invoice-data/invoice-data.types';

export interface IInvoicePaperPrintProps {
    invoiceData: IInvoiceDataState;
    closeClick?: () => void;
}