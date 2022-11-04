import { FC, PropsWithChildren } from 'react';
import AppBtn from '../app-btn';
import styles from './layout.module.sass';

interface ILayoutTableProps {
    total?: string;
    onRemoveRow: () => void;
    onAddRow: () => void;
    onDownloadXlsx?: () => void;
    onDownloadSample?: () => void;
    onDownloadUnit?: () => void;
}

const LayoutTable: FC<PropsWithChildren<ILayoutTableProps>> = (props) => {
    const { 
        total, 
        onRemoveRow, 
        onAddRow, 
        onDownloadXlsx, 
        onDownloadSample, 
        onDownloadUnit, 
        children 
    } = props;

    return (
        <div className={styles.layoutTable}>
            <div className={styles.layoutTable__downloads}>
                {onDownloadXlsx && (
                    <div className={styles.layoutTable__downloads__item}
                    onClick={onDownloadXlsx}>
                        <i className={styles.layoutTable__downloadIcon} />
                        <span>Загрузить Excel</span>
                    </div>
                )}
                {onDownloadSample && (
                    <div className={styles.layoutTable__downloads__item}
                    onClick={onDownloadSample}>
                        <i className={styles.layoutTable__downloadIcon} />
                        <span>Скачать шаблон</span>
                    </div>
                )}
                {onDownloadUnit && (
                    <div className={styles.layoutTable__downloads__item}
                    onClick={onDownloadUnit}>
                        <i className={styles.layoutTable__downloadIcon} />
                        <span>Список ед.измерений</span>
                    </div>
                )}
            </div>
            {children}
            <div className={styles.layoutTable__footer}>
                <div className={styles.layoutTable__total}>Итого: {total || '0,00'}</div>
                <div className={styles.layoutTable__btnsWrapper}>
                    <AppBtn className={styles.layoutTable__btn}
                    onClick={onRemoveRow}>
                        <i className={styles.layoutTable__trashIcon} />
                        <span>Удалить строку</span>
                    </AppBtn>
                    <AppBtn className={styles.layoutTable__btn}
                    onClick={onAddRow}>
                        <i className={styles.layoutTable__addIcon} />
                        <span>Добавить строку</span>
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default LayoutTable;