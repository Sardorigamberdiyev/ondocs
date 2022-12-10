import { FC, useState, useEffect } from 'react';
import { AppInput, AppInputWithBtn, AppLabel } from '../../../../app';
import RowForm from '../../../../forms/row-form';


const InvoiceStandartForm: FC = () => {
    const [numberInvoce, setNumberInvoice] = useState('');
    const [numberContract, setNumberContract] = useState('');
    const [ttnId, setTtnId] = useState('');
    const [dateDoc, setDateDoc] = useState('');
    const [dateContract, setDateContract] = useState('');
    const [idTready, setIdTready] = useState('');

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

export default InvoiceStandartForm;