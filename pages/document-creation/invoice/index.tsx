import { FC, useState } from 'react';

import { Option } from '../../../components/app-select/app-select';
import { LayoutMain, LayoutDocumentCreation } from '../../../components/layouts';
import AppCard from '../../../components/app-card';
import AppLabel from '../../../components/app-label';
import AppSelect from '../../../components/app-select';
import InvoiceAdditionallyForm from '../../../components/forms/invoice-additionally-form';
import InvoiceMiddleForm from '../../../components/forms/invoice-middle-form';
import InvoiceROEForm from '../../../components/forms/invoice-roe-form';
import InvoiceStandartForm from '../../../components/forms/invoice-standart-form';
import InvoiceCorrectorForm from '../../../components/forms/invoice-corrector-form';
import InvoiceTable from '../../../components/tables/invoice-table';
import InvoiceProcuratory from '../../../components/invoice-procuratory';
import styles from './invoice.module.sass';

const accountTypeList: Option[] = [
    {label: 'Стандарт', value: 'standart'},
    {label: 'Дополнительно', value: 'additionally'},
    {label: 'Возмещение затрат', value: 'roe'},
    {label: 'Корректор', value: 'corrector'},
    {label: 'Без оплаты', value: 'without_payment'},
    {label: 'Корректор возмещение затрат', value: 'corrector_roe'}
];

const Invoice: FC = () => {
    const [standartValues, setStandartValues] = useState({});
    const [accountType, setAccountType] = useState<Option>(accountTypeList[0]);

    return (
        <LayoutMain
        pageName="Создание документа: Счет-фактура"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
           <LayoutDocumentCreation>
                <AppCard className={styles.invoice__card}>
                    <div className={styles.invoice__selectWrapper}>
                        <AppLabel text="Тип счета">
                            <AppSelect 
                            placeholder="Тип счета"
                            valueList={accountTypeList}
                            value={accountType}
                            onChange={(value, context) => {
                                if (value) setAccountType(value);
                            }}
                            loading={false} />
                        </AppLabel>
                    </div>
                    <div className={styles.invoice__typeContent}>
                        {(accountType.value === 'standart' || 
                        accountType.value === 'without_payment') && 
                        <InvoiceStandartForm setStandartValues={setStandartValues} />}
                        {accountType.value === 'additionally' && <InvoiceAdditionallyForm />}
                        {accountType.value === 'roe' && <InvoiceROEForm />}
                        {(accountType.value === 'corrector' || 
                        accountType.value === 'corrector_roe') && <InvoiceCorrectorForm />}
                    </div>
                </AppCard>
                <AppCard className={styles.invoice__card}>
                    <InvoiceMiddleForm />
                </AppCard>
                <AppCard className={styles.invoice__card}>
                    <InvoiceTable />
                </AppCard>
                <AppCard className={styles.invoice__card}>
                    <InvoiceProcuratory />
                </AppCard>
           </LayoutDocumentCreation>
        </LayoutMain>
    )
}

export default Invoice;