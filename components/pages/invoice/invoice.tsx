import { FC, ChangeEvent, useEffect, useState } from 'react';

import { IInvoice } from './invoice.interfaces';
import { AppCard, AppInput, AppInputWithBtn, AppLabel, AppSelect } from '../../app';
import { LayoutDocumentCreation, LayoutMain } from '../../layouts';
import { FacturaDoc, ContractDoc, FacturaEmpowermentDoc } from './invoice-forms';
import { invoiceTypeList, unitsData } from '../../../common/variables/data.variables';
import { changeNational, changeSingleSideType, changeToggle, changeType } from '../../../features/invoice-data/invoice-data';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Modal from '../../modal';
import ToggleSwitch from '../../toggle-switch';
import InvoicePaperPrint from './invoice-paper-print';
import InvoiceTable from './invoice-table';
import RowForm from '../../forms/row-form';
import OldFacturaDoc from './invoice-forms/old-factura-doc';
import styles from './invoice.module.sass';
import FormWrapper from '../../form-wrapper';
import National from './invoice-forms/national';

const Invoice: FC<IInvoice> = () => {
    const [showPaper, setShowPaper] = useState(false);

    const invoiceData = useSelector((state: RootState) => state.invoiceData);
    const dispatch = useDispatch();

    const { 
        facturaType, 
        singleSidedType,
        seller, 
        buyer, 
        sellerTin, 
        buyerTin, 
        productList: { hasCommittent, hasMedical }
    } = invoiceData;

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

    const handleChange = (nationalKey: 'seller' | 'buyer') => (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(changeNational({national: {[name]: value}, nationalKey}));
    }

    const handleChangeSingleSide = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        dispatch(changeSingleSideType(checked));
    };

    const viewDocHandler = () => setShowPaper(!showPaper);

    const isStandart = facturaType === '0';
    const isExtra = facturaType === '1';
    const isReimbursement = facturaType === '2';
    const isWithoutPayment = facturaType === '3';
    const isCorrected = facturaType === '4';
    const isCorrectedReimbursement = facturaType === '5';
    const isExtraReimbursement = facturaType === '6';

    const typeValue = invoiceTypeList.find((type) => type.value === facturaType);

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
                            <div className={styles.invoice__typeContent}>
                                <div className={styles.invoice__typeContent__header}>
                                    <AppLabel text="Тип счета">
                                        <AppSelect 
                                        placeholder="Тип счета"
                                        valueList={invoiceTypeList}
                                        value={typeValue}
                                        onChange={(value, context) => {
                                            if (value) 
                                                dispatch(changeType(value.value))
                                        }}
                                        loading={false} />
                                    </AppLabel>
                                </div>
                                <RowForm
                                leftContentStyle={{justifyContent: 'space-between'}}
                                leftContent={
                                    <>
                                        <div className={styles.invoice__typeContent__body}>
                                            {(isStandart || isWithoutPayment || isReimbursement) && (
                                                <FacturaDoc />
                                            )}
                                            {(isExtra || isCorrected || isCorrectedReimbursement || isExtraReimbursement) && (
                                                <OldFacturaDoc />
                                            )}
                                        </div>
                                        <div className={styles.invoice__typeContent__footer}>
                                            <ToggleSwitch
                                            className={styles.invoice__typeContent__toggle}
                                            text="Комисионнер"
                                            inputName="hasCommittent"
                                            textRowReverse
                                            checked={hasCommittent}
                                            onChange={handleToggle} />
                                            <ToggleSwitch
                                            className={styles.invoice__typeContent__toggle}
                                            text="Поставщик товаров мед.назначения"
                                            inputName="hasMedical"
                                            textRowReverse
                                            checked={hasMedical}
                                            onChange={handleToggle} />
                                            <AppLabel text="ТТН ИД">
                                                <AppInputWithBtn>
                                                    <AppInput type="text"
                                                    placeholder="ТТН ИД" />
                                                </AppInputWithBtn>
                                            </AppLabel>
                                        </div>
                                    </>
                                }
                                rightContentStyle={{justifyContent: 'space-between'}}
                                rightContent={
                                    <>
                                        <div className={styles.invoice__typeContent__body}>
                                            {(isExtra || isCorrected || isCorrectedReimbursement || isExtraReimbursement) && (
                                                <FacturaDoc />
                                            )}
                                            <ContractDoc />
                                        </div>
                                        <div className={styles.invoice__typeContent__footer}>
                                            <AppLabel text="ID Договора">
                                                <AppInputWithBtn>
                                                    <AppInput type="text"
                                                    placeholder="Договора" />
                                                </AppInputWithBtn>
                                            </AppLabel>
                                        </div>
                                    </>
                                } />
                            </div>
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                        <RowForm 
                        leftContent={
                            <FormWrapper text="Ваша информация">
                                <AppLabel text="ИНН/ПИНФЛ*">
                                    <AppInput type="number"
                                    placeholder="12345667" />
                                </AppLabel>
                                <National
                                nationalKey="seller"
                                national={seller}
                                handleChange={handleChange} />
                            </FormWrapper>
                        }
                        rightContent={
                            <FormWrapper text="Информация о порядчике">
                                <RowForm
                                leftContent={
                                    !singleSidedType ? (
                                        <AppLabel text="ИНН/ПИНФЛ*">
                                            <AppInput type="text"
                                            placeholder="12345667" />
                                        </AppLabel>
                                    ) : undefined
                                }
                                rightContentStyle={{alignSelf: 'center'}}
                                rightContent={
                                    <>
                                        <ToggleSwitch text="Односторонний счет?"
                                        checked={singleSidedType}
                                        onChange={handleChangeSingleSide} />
                                        {hasCommittent && (
                                            <ToggleSwitch text="Поручитель" />
                                        )}
                                    </>
                                } />
                                { singleSidedType ? (
                                    <AppSelect 
                                    valueList={[]}
                                    value={null}
                                    loading={false} />
                                ) : (
                                    <National
                                    national={buyer}
                                    nationalKey="buyer"
                                    handleChange={handleChange} />
                                ) }
                            </FormWrapper>
                        } />
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                            <InvoiceTable />
                        </AppCard>
                        <AppCard className={styles.invoice__card}>
                            <FacturaEmpowermentDoc />
                        </AppCard>
                </LayoutDocumentCreation>
            </LayoutMain>
        </div>
    )
}

export default Invoice;