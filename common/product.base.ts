import { v4 as uuidv4 } from 'uuid';

export class ProductBase {
    id: string = uuidv4();
    catalogCode: string = '';
    catalogName: string = '';
    count: string = '';
    name: string = '';
    measureId: string = '';
}