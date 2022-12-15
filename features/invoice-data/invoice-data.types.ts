
export interface IProduct {
    id: string;
    committentName: string;
    committentTin: string;
    committentVatRegCode: string;
    catalogName: string;
    catalogCode: string;
    count: number;
    barcode: string;
    baseSumma: number;
    name: string;
    serial: string;
    summa: number;
    profitRate: number;
    exciseRate: number;
    exciseSum: number;
    deliverySum: number;
    vatRate: number;
    vatSum: number;
    deliverySumWithVat: number;
    lgotaId: string;
    measureId: string;
    withoutVat: boolean;
}

export interface IEmpowermentDoc {
    empowermentNo: string;
    empowermentDateOfIssue: Date | null;
    agentFio: string;
    agentTin: string;
    agentPinfl: string;
}

interface IItemReleasedDoc {
    itemReleasedTin: string;
    itemReleasedFio: string;
    itemReleasedPinfl: string;
}

interface IForeignCompany {
    countryId: string;
    name: string;
    adress: string;
    bank: string;
    account: string;
}

interface IContractDoc {
    contractNo: string;
    contractDate: Date | null;
}

interface IFacturaDoc {
    facturaNo: string;
    facturaDate: Date | null;
}

interface IOldFacturaDoc {
    oldFacturaId: string | null;
    oldFacturaNo: string | null;
    oldFacturaDate: Date | null;
}

export interface INational {
    name: string;
    account: string;
    bankId: string;
    address: string;
    mobile: string;
    workPhone: string;
    oked: string;
    districtId: string;
    director: string;
    accountant: string;
    vatRegCode: string;
    vatRegStatus: number;
    branchCode: string;
    branchName: string;
    taxGap: string;
}

interface IProductList {
    tin: string;
    hasVat: boolean;
    hasExcise: boolean;
    hasCommittent: boolean;
    hasLgota: boolean;
    hideReportCommittent: boolean;
    hasMedical: boolean;
    products: IProduct[];
}

export interface IInvoiceDataState {
    facturaType: string;
    singleSidedType: boolean;
    facturaDoc: IFacturaDoc;
    oldFacturaDoc: IOldFacturaDoc;
    contractDoc: IContractDoc;
    facturaEmpowermentDoc: IEmpowermentDoc;
    itemReleasedDoc: IItemReleasedDoc;
    foreignCompany: IForeignCompany;
    productList: IProductList;
    sellerTin: string;
    buyerTin: string;
    seller: INational;
    buyer: INational;
}

export type ChangeNationalAction = {
    national: Partial<INational>;
    nationalKey: keyof Pick<IInvoiceDataState, 'buyer' | 'seller'>;
};

export type ChangeProductAction = {
    productId: string;
    productKey: keyof Omit<IProduct, 'id'>;
    productValue: IProduct[keyof Omit<IProduct, 'id'>];
};

export type ChangeToggleAction = {
    hasKey: keyof Omit<IInvoiceDataState['productList'], 'products' | 'tin'>;
    checked: boolean;
};

export type ChangeEmpowerment = {
    empowermentKey: keyof Omit<IEmpowermentDoc, 'empowermentDateOfIssue'>;
    empowermentValue: string;
};