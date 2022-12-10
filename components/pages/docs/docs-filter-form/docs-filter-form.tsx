import { FC } from 'react';
import { IDocsFilterFormProps } from './docs-filter-form.interfaces';
import { AppBtn, AppDate, AppInput, AppLabel, AppSelect } from '../../../app';
import styles from './docs-filter-form.module.sass';

const DocsFilterForm: FC<IDocsFilterFormProps> = (props) => {
    return (
        <div className={styles.docsFilterForm}>
            <div className={styles.docsFilterForm__header}>
                <div className={styles.docsFilterForm__header__left}>
                    <h2>Фильтр</h2>
                    <AppBtn className={styles.docsFilterForm__header__btnHide}>
                        <i className={styles.docsFilterForm__eyeIcon} />
                        Скрыть фильтр
                    </AppBtn>
                </div>
                <AppBtn className={styles.docsFilterForm__header__btnReset}>Сбросить фильтр</AppBtn>
            </div>
            <div className={styles.docsFilterForm__body}>
                <AppLabel text="№ документа"
                className={styles.docsFilterForm__body__label}>
                    <AppInput type="number"
                    placeholder="№ документа" />
                </AppLabel>
                <AppLabel text="Тип документа"
                className={styles.docsFilterForm__body__label}>
                    <AppSelect
                    placeholder="Тип документа"
                    value={null}
                    valueList={[]}
                    loading={false} />
                </AppLabel>
                <AppLabel text="Поиск по котрагенту"
                className={styles.docsFilterForm__body__label}>
                    <AppInput type="number"
                    placeholder="Номер документа" />
                </AppLabel>
                <AppLabel text="Дата с"
                className={styles.docsFilterForm__body__label}>
                    <AppDate
                    widthContainer="80%"
                    placeholder="Дата с"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
                <AppLabel text="Дата до"
                className={styles.docsFilterForm__body__label}>
                    <AppDate 
                    widthContainer="80%"
                    placeholder="Дата до"
                    onChange={(date) => console.log(date)} />
                </AppLabel>
                <AppBtn className={styles.docsFilterForm__body__applyBtn}>
                    Применить
                    <i className={styles.docsFilterForm__rightArrowIcon} />
                </AppBtn>
            </div>
        </div>
    )
}

export default DocsFilterForm;