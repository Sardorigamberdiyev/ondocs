import { FC, ChangeEvent, useEffect, useState } from 'react';

import { IInvoice } from './invoice.interfaces';
import { AppCard, AppLabel, AppSelect } from '../../app';
import { LayoutDocumentCreation, LayoutMain } from '../../layouts';
import { InvoiceAdditionallyForm, InvoiceCorrectorForm, InvoiceMiddleForm, InvoiceProcuratoryForm, InvoiceROEForm, InvoiceStandartForm } from './invoice-forms';
import { invoiceTypeList } from '../../../common/variables/data.variables';
import { changeToggle, changeType } from '../../../features/invoice-data/invoice-data';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Modal from '../../modal';
import ToggleSwitch from '../../toggle-switch';
import InvoicePaperPrint from './invoice-paper-print';
import InvoiceTable from './invoice-table';
import styles from './invoice.module.sass';

const Invoice: FC<IInvoice> = () => {
    const [showPaper, setShowPaper] = useState(false);
    const invoiceData = useSelector((state: RootState) => state.invoiceData);
    const dispatch = useDispatch();

    const { facturaType, productList: {hasCommittent, hasMedical } } = invoiceData;

    useEffect(() => {
        if (showPaper)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
    }, [showPaper]);

    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target;
        if (name === 'hasCommittent' || name === 'hasMedical')
            dispatch(changeToggle({hasKey: name, checked}))
    }

    const viewDocHandler = () => setShowPaper(!showPaper);

    return (
        <div className={styles.invoice}>
            <LayoutMain
            pageName="Создание документа: Счет-фактура"
            btnBackPageText="Назад/Отменить"
            btnBackPageLink="/">
                {showPaper && (
                    <Modal>
                        <InvoicePaperPrint 
                        invoiceData={invoiceData}
                        closeClick={viewDocHandler} />
                    </Modal>
                )}
                <LayoutDocumentCreation
                viewDocHandler={viewDocHandler}>
                        <AppCard className={styles.invoice__card}>
                            <div className={styles.invoice__selectWrapper}>
                                <AppLabel text="Тип счета">
                                    <AppSelect 
                                    placeholder="Тип счета"
                                    valueList={invoiceTypeList}
                                    value={invoiceTypeList.find((type) => type.value === facturaType.toString())}
                                    onChange={(value, context) => {
                                        if (value) 
                                            dispatch(changeType(value.value))
                                    }}
                                    loading={false} />
                                </AppLabel>
                            </div>
                            <div className={styles.invoice__typeContent}>
                                {(facturaType.toString() === '0' || facturaType.toString() === '1') && <InvoiceStandartForm />}
                                {facturaType.toString() === '2' && <InvoiceAdditionallyForm />}
                                {facturaType.toString() === '3' && <InvoiceROEForm />}
                                {(facturaType.toString() === '4' || facturaType.toString() === '5') && <InvoiceCorrectorForm />}
                            </div>
                            <ToggleSwitch
                            text="Комисионнер"
                            inputName="hasCommittent"
                            checked={hasCommittent}
                            onChange={handleToggle} />
                            <ToggleSwitch
                            text="Поставщик товаров мед.назначения"
                            inputName="hasMedical"
                            checked={hasMedical}
                            onChange={handleToggle} />
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                            <InvoiceMiddleForm />
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                            <InvoiceTable />
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                            <InvoiceProcuratoryForm />
                        </AppCard>
                </LayoutDocumentCreation>
            </LayoutMain>
        </div>
    )
}

export default Invoice;