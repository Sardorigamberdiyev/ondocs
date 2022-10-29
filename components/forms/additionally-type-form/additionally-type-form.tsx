import { FC } from 'react';
import AppInput from '../../app-input';
import AppInputWithBtn from '../../app-input-with-btn';
import AppLabel from '../../app-label';
import NewInvoiceForm from '../new-invoice-form';
import OldInvoiceForm from '../old-invoice-form';
import RowForm from '../row-form';

const AdditionallyTypeForm: FC = () => {
    return (
        <RowForm 
        leftContent={
            <>
                <OldInvoiceForm />
                <AppLabel text="ТТН ИД">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ТТН ИД" />
                    </AppInputWithBtn>
                </AppLabel>
            </>
        } 
        rightContentStyle={{justifyContent: 'space-between'}}
        rightContent={
            <>
                <NewInvoiceForm />
                <AppLabel text="ID Договора">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ID Договора" />
                    </AppInputWithBtn>
                </AppLabel>
            </>
        } />
    )
}

export default AdditionallyTypeForm;