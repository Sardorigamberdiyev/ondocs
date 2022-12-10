import { FC, useState, useEffect } from 'react';
import { LayoutSetting } from '../../../components/layouts';
import { AppBtn, AppInput, AppTable, AppTableHead, AppTableRow, AppTableBody } from '../../../components/app';
import { codesList } from '../../../common/data.variables';
import CodeTableRow from '../../../components/tables/code-table-row';
import styles from './codes.module.sass';

const Codes: FC = () => {
    const [codes, setCodes] = useState<typeof codesList>(codesList);
    const [searchList, setSearchList] = useState<typeof codesList>([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        if (searchValue.length === 0)
            return setSearchList([]);
        
        setSearchList(codesList.filter((code) => {
            const { classifierCode, classifierName } = code;
            return (
                classifierCode.match(searchValue) || 
                classifierName.toLowerCase()
                .match(searchValue.toLowerCase())
            )
        }))
    }, [searchValue])

    const deleteCode = (id: string) => setCodes(codes.filter((code) => code.id !== id));
    const addCode = () => {
        const codeCandidate = codes.find((code) => code.id === selectedValue);

        if (codeCandidate) {
            setSearchList([]);
            setSelectedValue('');
            return setSearchValue('');
        }

        const code = codesList.find((item) => item.id === selectedValue);

        if (!code)
            return;

        setCodes([...codes, code]);
        setSearchList([]);
        setSearchValue('');
        setSelectedValue('');
    }

    return (
        <LayoutSetting currentPage="codes"
        btnsDisable>
            <div className={styles.codes__header}>
                <h4>Код / Наименование по Единому классификтору:</h4>
                <div className={styles.codes__excelDownloads}>
                    <i className={styles.codes__excelIcon} />
                    <div className={styles.codes__excelText}>Скачать список товаров</div>
                </div>
            </div>
            <div className={styles.codes__searchAdd}>
                <AppInput 
                type="text"
                iconUrl="/icons/search.png"
                placeholder="Введите код или название товара"
                className={styles.codes__searchAdd__search}
                classNameIcon={styles.codes__searchAdd__icon}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
                <AppBtn className={styles.codes__searchAdd__btn}
                onClick={addCode}>Добавить</AppBtn>
                {!!searchList.length && (
                    <div className={styles.codes__searchAdd__resultList}>
                        <ul>
                            {
                                searchList.map(({id, classifierName}) => (
                                    <li 
                                    key={id}
                                    onClick={() => {
                                        setSelectedValue(id);
                                        setSearchValue(classifierName);
                                    }}>{classifierName}</li>
                                ))
                            }
                        </ul>
                    </div>
                )}
            </div>
            <div className={styles.codes__miniInfo}>
                Если в Классификаторе отсутствует нужный Вам товар/услуга, Вы можете воспользоваться опцией «Добавить новый товар или услугу» здесь:
                <a href="https://tasnif.soliq.uz/classifier/"
                target="__blank"> https://tasnif.soliq.uz/classifier/</a>
            </div>
            <AppTable className={styles.codes__table}>
                <AppTableHead>
                    <AppTableRow>
                        <th>№</th>
                        <th>Код квассификатора</th>
                        <th>Название классификатора</th>
                        <th />
                    </AppTableRow>
                </AppTableHead>
                <AppTableBody>
                    {
                        codes.map((code, index) => (
                            <CodeTableRow
                            key={code.id}
                            index={index}
                            code={code}
                            onDeleteCode={deleteCode} />
                        ))
                    }
                </AppTableBody>
            </AppTable>
        </LayoutSetting>
    )
}

export default Codes;