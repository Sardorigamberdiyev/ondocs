import { IProduct } from '../../../features/invoice-data/invoice-data.types';

export interface ILayoutTableRowProps {
    index: number;
    className?: string;
    disableInput?: boolean;
    product?: IProduct;
    getLayoutRowData?: (layoutData: any) => void;
}