import { configureStore } from '@reduxjs/toolkit';
import LowVisionReducer from '../features/low-vision/low-vision';
import InvoiceDataReducer from '../features/invoice-data/invoice-data';

export const store = configureStore({
    reducer: {
        lowVision: LowVisionReducer,
        invoiceData: InvoiceDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
