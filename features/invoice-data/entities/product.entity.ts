import { IProduct } from '../invoice-data.types';
import { v4 as uuidv4 } from 'uuid';

export class ProductEntity implements IProduct {
    id: string = uuidv4();
    committentName: string = '';
    committentTin: string = '';
    committentVatRegCode: string = '';
    catalogName: string = '';
    catalogCode: string = '';
    count: number = 0;
    barcode: string = '';
    baseSumma: number = 0;
    name: string = '';
    serial: string = '';
    summa: number = 0;
    profitRate: number = 0;
    exciseRate: number = 0;
    exciseSum: number = 0;
    deliverySum: number = 0;
    vatRate: number = 0;
    vatSum: number = 0;
    deliverySumWithVat: number = 0;
    lgotaId: string = '';
    measureId: string = '';
    withoutVat: boolean = false;
}