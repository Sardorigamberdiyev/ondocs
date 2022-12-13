import { FC } from 'react';
import { AppInput, AppLabel } from '../../../../app';
import { IOldFacturaDocProps } from './old-factura-doc.interfaces';
import FormWrapper from '../../../../form-wrapper';
import styles from './old-factura-doc.module.sass';

const OldFacturaDoc: FC<IOldFacturaDocProps> = () => {
    return (
        <FormWrapper text="Старый счет фактура"
        className={styles.oldFacturaDoc}>
            <AppLabel text="ИД*">
                <AppInput type="number"
                placeholder="123123123"
                name="oldFacturaId" />
            </AppLabel>
            <AppLabel text="Дата*">
                <AppInput type="text"
                placeholder="Дата*"
                name="oldFacturaDate" />
            </AppLabel>
            <AppLabel text="Номер*">
                <AppInput type="number"
                placeholder="Номер*"
                name="oldFacturaNo" />
            </AppLabel>
        </FormWrapper>
    )
}

export default OldFacturaDoc;