import { ChangeEvent } from 'react';
import { IInvoiceDataState, INational } from '../../../../../features/invoice-data/invoice-data.types';

export interface INationalProps {
    national: INational;
    nationalKey: keyof Pick<IInvoiceDataState, 'buyer' | 'seller'>;
    handleChange: (nationalKey: INationalProps['nationalKey']) => (e: ChangeEvent<HTMLInputElement>) => void;
}