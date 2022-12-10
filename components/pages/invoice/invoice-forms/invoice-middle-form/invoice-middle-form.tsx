import { ChangeEvent, FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeNational, changeSingleSideType } from '../../../../../features/invoice-data/invoice-data';
import { AppInput, AppLabel, AppSelect } from '../../../../app';
import { IInvoiceMiddleFormProps } from './invoice-middle-form.interfaces';
import { RootState } from '../../../../../store/store';
import FormWrapper from '../../../../form-wrapper';
import ToggleSwitch from '../../../../toggle-switch';
import RowForm from '../../../../forms/row-form';
import styles from './invoice-middle-form.module.sass';

const InvoiceMiddleForm: FC<IInvoiceMiddleFormProps> = (props) => {
    const { 
        singleSidedType,
        seller, 
        buyer, 
        sellerTin, 
        buyerTin, 
        productList: { hasCommittent } 
    } = useSelector((state: RootState) => state.invoiceData);
    
    const dispatch = useDispatch();

    const handleChange = (nationalKey: 'seller' | 'buyer') => (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        dispatch(changeNational({national: {[name]: value}, nationalKey}))
    }
    
    return (
        <RowForm 
        leftContent={
            <FormWrapper text="Ваша информация">
                <AppLabel text="ИНН/ПИНФЛ*">
                    <AppInput type="number"
                    placeholder="12345667" />
                </AppLabel>
                { !singleSidedType && (
                    <>
                        <AppLabel text="Вид дохода">
                            <AppSelect 
                            valueList={[]} 
                            value={null}
                            loading={false}
                            placeholder="Вид дохода" />
                        </AppLabel>
                        <div className={styles.invoiceMiddleForm__ndsCoefficient}>
                            <div className={styles.invoiceMiddleForm__coefficientText}>Коэффициент разрыва при уплате НДС (по всей цепочке)</div>
                            <div className={styles.invoiceMiddleForm__coefficientValue}></div>
                        </div>
                    </>
                ) }
                <AppLabel text="НДС регистрационнай номер">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="vatRegCode"
                    readOnly
                    disabled
                    value={seller.vatRegCode} />
                </AppLabel>
                <RowForm 
                leftContent={
                    <AppLabel text="Номер счета">
                        <AppInput type="text"
                        placeholder="Введите данные"
                        name="account"
                        value={seller.account}
                        onChange={handleChange('seller')} />
                    </AppLabel>
                }
                rightContent={
                    <AppLabel text="МФО">
                        <AppInput type="number"
                        placeholder="Введите данные"
                        name="bankId"
                        value={seller.bankId}
                        onChange={handleChange('seller')} />
                    </AppLabel>
                } />
                <AppLabel text="Адрес">
                    <AppInput type="text"
                    placeholder="Введите данные"
                    name="address"
                    value={seller.address}
                    onChange={handleChange('seller')} />
                </AppLabel>
                <RowForm 
                leftContent={
                    <AppLabel text="Директор">
                        <AppInput type="text"
                        placeholder="Введите данные"
                        name="director"
                        value={seller.director}
                        onChange={handleChange('seller')} />
                    </AppLabel>
                }
                rightContent={
                    <AppLabel text="Главный бухгалтер">
                        <AppInput type="text"
                        placeholder="Введите данные"
                        name="accountant"
                        value={seller.accountant}
                        onChange={handleChange('seller')} />
                    </AppLabel>
                } />
            </FormWrapper>
        }
        rightContent={
            <FormWrapper text="Информация о порядчике">
                <RowForm
                leftContent={
                    <AppLabel text="Номер счета"
                    labelHidden={singleSidedType}>
                        <AppInput type="text"
                        placeholder="Номер счета"
                        disableTD={true} />
                    </AppLabel>
                }
                rightContentStyle={{alignSelf: 'center'}}
                rightContent={
                    <>
                        <ToggleSwitch text="Односторонний счет?"
                        checked={singleSidedType}
                        onChange={(e) => dispatch(changeSingleSideType(e.target.checked))} />
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
                ) : <>
                        <AppLabel text="Компания-партнер">
                            <AppInput type="text"
                            placeholder="Введите данные" />
                        </AppLabel>
                        <div className={styles.invoiceMiddleForm__ndsCoefficient}>
                            <div className={styles.invoiceMiddleForm__coefficientText}>Коэффициент разрыва при уплате НДС (по всей цепочке)</div>
                            <div className={styles.invoiceMiddleForm__coefficientValue}></div>
                        </div>
                        <AppLabel text="НДС регистрационный номер">
                            <AppInput type="text"
                            placeholder="Введите данные"
                            name="vatRegCode"
                            value={buyer.vatRegCode}
                            readOnly
                            disabled />
                        </AppLabel>
                        <RowForm 
                        leftContent={
                            <AppLabel text="Номер счета">
                                <AppInput type="text"
                                placeholder="Введите данные"
                                name="account"
                                value={buyer.account}
                                onChange={handleChange('buyer')} />
                            </AppLabel>
                        }
                        rightContent={
                            <AppLabel text="МФО">
                                <AppInput type="text"
                                placeholder="Введите данные"
                                name="bankId"
                                value={buyer.bankId}
                                onChange={handleChange('buyer')} />
                            </AppLabel>
                        } />
                        <AppLabel text="Адрес">
                            <AppInput type="text"
                            placeholder="Введите данные"
                            name="address"
                            value={buyer.address}
                            onChange={handleChange('buyer')} />
                        </AppLabel>
                        <RowForm 
                        leftContent={
                            <AppLabel text="Директор">
                                <AppInput type="text"
                                placeholder="Введите данные"
                                name="director"
                                value={buyer.director}
                                onChange={handleChange('buyer')} />
                            </AppLabel>
                        }
                        rightContent={
                            <AppLabel text="Главный бухгалтер">
                                <AppInput type="text" 
                                placeholder="Введите данные"
                                name="accountant"
                                value={buyer.accountant}
                                onChange={handleChange('buyer')} />
                            </AppLabel>
                        } />
                </> }
            </FormWrapper>
        } />
    )
}

export default InvoiceMiddleForm;