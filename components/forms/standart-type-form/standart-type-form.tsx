import { FC, useState, useEffect } from 'react';
import AppInput from '../../app-input';
import AppInputWithBtn from '../../app-input-with-btn';
import AppLabel from '../../app-label';
import RowForm from '../row-form';

interface IStandartTypeFormProps {
    setStandartValues: (data: object) => void;
}

const StandartTypeForm: FC<IStandartTypeFormProps> = ({setStandartValues}) => {
    const [numberInvoce, setNumberInvoice] = useState('');
    const [numberContract, setNumberContract] = useState('');
    const [ttnId, setTtnId] = useState('');
    const [dateDoc, setDateDoc] = useState('');
    const [dateContract, setDateContract] = useState('');
    const [idTready, setIdTready] = useState('');

    useEffect(() => {
        setStandartValues({
            numberInvoce,
            numberContract,
            ttnId,
            dateDoc,
            dateContract,
            idTready
        })
    }, [numberInvoce, numberContract, ttnId, dateDoc, dateContract, idTready])

    return (
        <RowForm 
        leftContent={
            <>
                <AppLabel text="Номер счет-фактуры">
                    <AppInput type="number"
                    placeholder="Номер счет-фактуры"
                    value={numberInvoce}
                    onChange={(e) => setNumberInvoice(e.target.value)} />
                </AppLabel>
                <AppLabel text="Введите номер контракта">
                    <AppInput type="number"
                    placeholder="Введите номер контракта" 
                    value={numberContract}
                    onChange={(e) => setNumberContract(e.target.value)} />
                </AppLabel>
                <AppLabel text="ТТН ИД">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ТТН ИД"
                        value={ttnId}
                        onChange={(e) => setTtnId(e.target.value)} />
                    </AppInputWithBtn>
                </AppLabel>
            </>
        } 
        rightContent={
            <>
                <AppLabel text="Дата документ">
                    <AppInput type="text"
                    placeholder="Дата документа"
                    value={dateDoc}
                    onChange={(e) => setDateDoc(e.target.value)} />
                </AppLabel>
                <AppLabel text="Дата до">
                    <AppInput type="text"
                    placeholder="Дата контракта"
                    value={dateContract}
                    onChange={(e) => setDateContract(e.target.value)} />
                </AppLabel>
                <AppLabel text="ID Договора">
                    <AppInputWithBtn>
                        <AppInput type="text"
                        placeholder="ID Договора"
                        value={idTready}
                        onChange={(e) => setIdTready(e.target.value)} />
                    </AppInputWithBtn>
                </AppLabel>
            </>
        } />
    )
}

export default StandartTypeForm;