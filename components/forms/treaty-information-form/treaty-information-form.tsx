import { FC, useState, useEffect } from 'react';
import { Option } from '../../app-select/app-select';
import RowForm from '../row-form';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import AppSelect from '../../app-select';
import AppBtn from '../../app-btn';
import styles from './treaty-information-form.module.sass';

interface ITreatyInformationFormProps {
    partner?: boolean;
    formId?: string;
    onAddTreatyInfoForm?: () => void;
    onRemoveTreatyInfoForm?: (infoFormId: string) => void;
    getTreatyInfoFormData?: (infoFormData: any) => void;
}

const TreatyInformationForm: FC<ITreatyInformationFormProps> = (props) => {
    const { partner, formId, onAddTreatyInfoForm, onRemoveTreatyInfoForm, getTreatyInfoFormData } = props;

    const [nameBank, setNameBank] = useState('');
    const [inn, setINN] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fullName, setFullName] = useState('');
    const [pinflIndividual, setPinflIndividual] = useState('');
    const [mfo, setMfo] = useState('');
    const [address, setAdress] = useState('');
    const [oked, setOked] = useState('');
    const [homePhone, setHomePhone] = useState('');
    const [checkingCheck, setCheckingCheck] = useState<Option | null>(null);
    const [mobilePhone, setMobilePhone] = useState<Option | null>(null);

    useEffect(() => {
        if (getTreatyInfoFormData)
            getTreatyInfoFormData({
                id: formId,
                nameBank,
                inn,
                companyName,
                fullName,
                pinflIndividual,
                mfo,
                address,
                oked,
                homePhone,
                checkingCheck,
                mobilePhone
            })
    }, [
        nameBank,
        inn,
        companyName,
        fullName,
        pinflIndividual,
        mfo,
        address,
        oked,
        homePhone,
        checkingCheck,
        mobilePhone
    ])

    return (
        <>
            <AppLabel text="ИНН/ПИНФЛ">
                <div className={styles.treatyInformationForm__partner}>
                    <AppInput type="number"
                    placeholder="1234123"
                    value={inn}
                    onChange={(e) => setINN(e.target.value)} />
                    {partner && (
                        <div className={styles.treatyInformationForm__partner__btns}>
                            <AppBtn className={styles.treatyInformationForm__btn}
                            onClick={onAddTreatyInfoForm}>
                                <i className={styles.treatyInformationForm__addIcon} />
                            </AppBtn>
                            <AppBtn className={styles.treatyInformationForm__btn}
                            onClick={() => {
                                if (onRemoveTreatyInfoForm)
                                    onRemoveTreatyInfoForm(formId || '')
                            }}>
                                <i className={styles.treatyInformationForm__trashIcon} />
                            </AppBtn>
                        </div>
                    )}
                </div>
            </AppLabel>
            <AppLabel text="Название компании">
                <AppInput type="text"
                placeholder="*Raqamli dunyo"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)} />
            </AppLabel>
            <RowForm 
            leftContent={
                <AppLabel text="ФИО">
                    <AppInput type="text"
                    placeholder="ФИО"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} />
                </AppLabel>
            }
            rightContent={
                <AppLabel text="ПИНФЛ Физ. Лица">
                    <AppInput type="text"
                    placeholder="ПИНФЛ Физ. Лица"
                    value={pinflIndividual}
                    onChange={(e) => setPinflIndividual(e.target.value)} />
                </AppLabel>
            } />
            <AppLabel text="Название банка*">
                <RowForm
                leftContent={
                    <AppInput type="text"
                    placeholder="Название банка"
                    value={nameBank}
                    onChange={(e) => setNameBank(e.target.value)} />
                }
                rightContent={
                    <AppInput type="text"
                    placeholder="МФО"
                    value={mfo}
                    onChange={(e) => setMfo(e.target.value)} />
                } />
            </AppLabel>
            <AppLabel text="Адрес">
                <AppInput type="text"
                placeholder="Адрес"
                value={address}
                onChange={(e) => setAdress(e.target.value)} /> 
            </AppLabel>
            <RowForm
            leftContent={
                <>
                    <AppLabel text="ОКЕД">
                        <AppInput type="text"
                        placeholder="1234"
                        value={oked}
                        onChange={(e) => setOked(e.target.value)} />
                    </AppLabel>
                    <AppLabel text="Телефон">
                        <AppInput type="text"
                        placeholder="+998909999999"
                        value={homePhone}
                        onChange={(e) => setHomePhone(e.target.value)} />
                    </AppLabel>
                </>
            }
            rightContent={
                <>
                    <AppLabel text="Расчетный счет">
                        <AppSelect
                        loading={false}
                        valueList={[]}
                        placeholder="12324123"
                        value={checkingCheck}
                        onChange={(value) => setCheckingCheck(value)} />
                    </AppLabel>
                    <AppLabel text="Мобильный телефон">
                        <AppSelect
                        loading={false}
                        valueList={[]}
                        placeholder="12324123"
                        value={mobilePhone}
                        onChange={(value) => setMobilePhone(value)} />
                    </AppLabel>
                </>
            } />
        </>
    )
}

export default TreatyInformationForm;