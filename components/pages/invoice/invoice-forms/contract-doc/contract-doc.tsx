import { FC } from 'react';
import { AppInput, AppLabel } from '../../../../app';
import { IContractDocProps } from './contract-doc.interfaces';
import FormWrapper from '../../../../form-wrapper';
import styles from './contract-doc.module.sass';

const ContractDoc: FC<IContractDocProps> = ({headerTextDisable}) => {
    return (
        <FormWrapper text={!headerTextDisable ? "Договор" : undefined}
        className={styles.contractDoc}>
            <AppLabel text="Номер*">
                <AppInput type="number"
                placeholder="Номер*"
                name="contractNo" />
            </AppLabel>
            <AppLabel text="Дата договора">
                <AppInput type="text"
                placeholder="Дата*"
                name="contractDate" />
            </AppLabel>
        </FormWrapper>
    )
}

export default ContractDoc;