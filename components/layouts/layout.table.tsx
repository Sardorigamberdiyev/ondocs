import { FC, PropsWithChildren } from 'react';
import { ILayoutTableProps } from './layout.interfaces';
import AppBtn from '../app-btn';
import styles from './layout.module.sass';

const LayoutTable: FC<PropsWithChildren<ILayoutTableProps>> = (props) => {
    const { 
        total, 
        totalDisabled,
        addBtnText,
        removeBtnText,
        className,
        classNameBtn,
        onRemoveRow, 
        onAddRow, 
        onDownloadXlsx, 
        onDownloadSample, 
        onDownloadUnit, 
        children 
    } = props;

    return (
        <div className={`${styles.layoutTable} ${className || ''}`}>
            <div className={styles.layoutTable__downloads}
            style={onDownloadSample || onDownloadXlsx || onDownloadUnit ? {} : {margin: '0'}}>
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
                <div className={styles.layoutTable__total}>{totalDisabled ? '' : `Итого: ${total || '0,00'}`}</div>
                <div className={styles.layoutTable__btnsWrapper}>
                    <AppBtn className={`${styles.layoutTable__btn} ${classNameBtn || ''}`}
                    onClick={onRemoveRow}>
                        <i className={styles.layoutTable__trashIcon} />
                        <span>{removeBtnText || 'Удалить строку'}</span>
                    </AppBtn>
                    <AppBtn className={`${styles.layoutTable__btn} ${classNameBtn || ''}`}
                    onClick={onAddRow}>
                        <i className={styles.layoutTable__addIcon} />
                        <span>{addBtnText || 'Добавить строку'}</span>
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default LayoutTable;