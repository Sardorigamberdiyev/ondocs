import { IProduct } from '../../../features/invoice-data/invoice-data.types';

export interface IProductTableRowProps {
    type: 'invoice';
    index: number;
    className?: string;
    disableInput?: boolean;
    product?: IProduct;
    getLayoutRowData?: (layoutData: any) => void;
}