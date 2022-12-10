
interface IStir {
    CN: string;
    O: string;
    T: string;
    TIN: string;
    UID: string;
    alias: string;
    disk: string;
    name: string;
    path: string;
    serialNumber: string;
    type: 'pfx' | 'certkey' | 'ftjc';
    validFrom: Date;
    validTo: Date;
}

export interface IStirWithId extends IStir {
    id: string
}

export class EimzoService {
    private eimzoClient: any;
    private _stirs: IStir[] = [];

    constructor(eimzoClient: any) {
        this.eimzoClient = eimzoClient;
    }

    get stirs(): IStir[] {
        return this._stirs;
    }

    public async createPkcs7(keyId: string, guid: string, timestamp: Date, ) {

    }

    public async getlistAllUserKeys(
            success: (items: IStirWithId[], firstId: any) => void,
            fail: (error: Error, r?: any) => void
        ) {
        const items = this.eimzoClient.listAllUserKeys(
            this.itemIdGen.bind(this), 
            this.itemUiGen.bind(this),
            success,
            fail
        );
        console.log('items service', items);
    }

    private itemIdGen(stir: IStir, index: string) {
        console.log('---------------- itemIdGen --------------');
        return `itm-${stir.serialNumber}-${index}`;
    }

    private itemUiGen(itemId: string, stir: IStir): IStirWithId {
        console.log('---------------- itemUiGen --------------');
        return {...stir, id: itemId};
    }
}