import { FC, useState } from 'react';

import { Option } from '../../../components/app-select/app-select';
import { LayoutCard, LayoutMain } from '../../../components/layouts';
import AppLabel from '../../../components/app-label';
import AppSelect from '../../../components/app-select';
import AdditionallyTypeForm from '../../../components/forms/additionally-type-form';
import MiddleForm from '../../../components/forms/middle-form';
import ROETypeForm from '../../../components/forms/roe-type-form';
import StandartTypeForm from '../../../components/forms/standart-type-form';
import styles from './invoice.module.sass';
import CorrectorTypeForm from '../../../components/forms/corrector-type-form';
import InvoiceTable from '../../../components/tables/invoice-table';
import InvoiceProcuratory from '../../../components/invoice-procuratory';
import AppBtn from '../../../components/app-btn';

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

    console.log(standartValues);

    return (
        <LayoutMain
        pageName="Создание документа: Счет-фактура"
        btnBackPageText="Назад/Отменить"
        btnBackPageLink="/">
            <LayoutCard className={styles.invoice__card}>
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
                    <StandartTypeForm setStandartValues={setStandartValues} />}
                    {accountType.value === 'additionally' && <AdditionallyTypeForm />}
                    {accountType.value === 'roe' && <ROETypeForm />}
                    {(accountType.value === 'corrector' || 
                    accountType.value === 'corrector_roe') && <CorrectorTypeForm />}
                </div>
            </LayoutCard>
            <LayoutCard className={styles.invoice__card}>
                <MiddleForm />
            </LayoutCard>
            <LayoutCard className={styles.invoice__card}>
                <InvoiceTable />
            </LayoutCard>
            <LayoutCard className={styles.invoice__card}>
                <InvoiceProcuratory />
            </LayoutCard>
            <div className={styles.invoice__lowerBtns}>
                <div className={styles.invoice__wrapperBtns}>
                    <AppBtn className={styles.invoice__btnCancel}>
                        <i className={styles.invoice__cancelIcon} />
                        Отменить
                    </AppBtn>
                    <AppBtn className={styles.invoice__btnViewDoc}>
                        <i className={styles.invoice__acceptIcon} />
                        Показать документ
                    </AppBtn>
                </div>
                <div className={styles.invoice__wrapperBtns}>
                    <AppBtn className={styles.invoice__btnSave}>
                        <i className={styles.invoice__diskIcon} />
                        Сохранить
                    </AppBtn>
                    <AppBtn className={styles.invoice__btnSign}>
                        <i className={styles.invoice__seenIcon} />
                        Подписать
                    </AppBtn>
                </div>
            </div>
        </LayoutMain>
    )
}

export default Invoice;