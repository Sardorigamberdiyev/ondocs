import { FC } from 'react';
import { AppInput, AppLabel } from '../../../../app';
import { IFacturaDocProps } from './factura-doc.interfaces';
import FormWrapper from '../../../../form-wrapper';
import styles from './factura-doc.module.sass';

const FacturaDoc: FC<IFacturaDocProps> = ({headerTextDisable}) => {
    return (
        <FormWrapper text={!headerTextDisable ? "Новый счет фактура" : undefined}
        className={styles.invoiceDocForm}>
            <AppLabel text="Дата*">
                <AppInput type="text"
                placeholder="Дата*"
                name="facturaDate" />
            </AppLabel>
            <AppLabel text="Номер">
                <AppInput type="number"
                placeholder="Номер"
                name="facturaNo" />
            </AppLabel>
        </FormWrapper>
    )
}

export default FacturaDoc;