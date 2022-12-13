import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductEntity } from './entities/product.entity';
import { 
    ChangeNationalAction, 
    ChangeProductAction, 
    ChangeToggleAction, 
    IInvoiceDataState, 
    INational 
} from './invoice-data.types';

const initialNational: INational = {
    name: '',
    account: '',
    bankId: '',
    address: '',
    mobile: '',
    workPhone: '',
    oked: '',
    districtId: '',
    director: '',
    accountant: '',
    vatRegCode: '',
    vatRegStatus: 0,
    branchCode: '',
    branchName: '',
    taxGap: '',
}

const initialState: IInvoiceDataState = {
    facturaType: '0',
    singleSidedType: false,
    facturaDoc: {
        facturaDate: null,
        facturaNo: ''
    },
    oldFacturaDoc: {
        oldFacturaId: null,
        oldFacturaNo: null,
        oldFacturaDate: null
    },
    contractDoc: {
        contractDate: null,
        contractNo: ''
    },
    facturaEmpowermentDoc: {
        agentFio: '',
        agentPinfl: '',
        agentTin: '',
        empowermentDateOfIssue: null,
        empowermentNo: ''
    },
    itemReleasedDoc: {
        itemReleasedFio: '',
        itemReleasedPinfl: '',
        itemReleasedTin: ''
    },
    foreignCompany: {
        account: '',
        adress: '',
        bank: '',
        countryId: '',
        name: ''
    },
    productList: {
        tin: '',
        hasCommittent: false,
        hasExcise: false,
        hasLgota: false,
        hasMedical: false,
        hasVat: false,
        hideReportCommittent: false,
        products: [{...(new ProductEntity())}]
    },
    sellerTin: '',
    buyerTin: '',
    seller: initialNational,
    buyer: initialNational
}

export const invoiceDataSlice = createSlice({
    name: 'invoice-data',
    initialState,
    reducers: {
        changeType: (state, action: PayloadAction<string>) => {
            state.facturaType = action.payload;
        },
        changeSingleSideType: (state, action: PayloadAction<boolean>) => {
            state.singleSidedType = action.payload;
        },
        changeNational: (state, action: PayloadAction<ChangeNationalAction>) => {
            const { national, nationalKey } = action.payload;
            state[nationalKey] = {...state[nationalKey], ...national};
        },
        changeToggle: (state, action: PayloadAction<ChangeToggleAction>) => {
            const { hasKey, checked } = action.payload;

            state.productList[hasKey] = checked;
        },
        changeProduct: (state, action: PayloadAction<ChangeProductAction>) => {
            const { productId, productKey, productValue } = action.payload;
            const { products } = state.productList;
            const productIndex = products.findIndex((p) => p.id === productId);

            if (0 > productIndex)
                return;

            const product = products[productIndex];

            state.productList.products[productIndex] = {...product, [productKey]: productValue};
        },
        addProduct: ({ productList: { products } }) => {
            products.push({...(new ProductEntity())});
        },
        removeLastProduct: ({ productList: { products } }) => {
            if (products.length <= 1)
                return;

            products.pop();
        }
    }
});

export const { 
    changeNational, 
    changeToggle,
    changeProduct,
    addProduct, 
    removeLastProduct, 
    changeType,
    changeSingleSideType
} = invoiceDataSlice.actions;

export default invoiceDataSlice.reducer;