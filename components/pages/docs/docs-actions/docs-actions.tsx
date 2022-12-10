import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IDocsActionsProps } from './docs-actions.interfaces';
import { AppBtn, AppLimitSelect } from '../../../app';
import styles from './docs-actions.module.sass';
import { RootState } from '../../../../store/store';

const DocsActions: FC<IDocsActionsProps> = (props) => {
    const {
        acceptBtnText,
        acceptBtnDisabled,
        cancelBtnText,
        cancelBtnDisabled,
        getLimit,
        acceptClick,
        cancelClick,
        xlsxClick,
        syncClick
    } = props;

    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);
    const lowVisionClassName = isLowVision ? ' lowVision' : '';
    
    return (
        <div className={styles.docsActions}>
            <div className={styles.docsActions__left}>
                {acceptClick && (
                    <AppBtn className={styles.docsActions__acceptBtn}
                    disabled={acceptBtnDisabled}
                    onClick={acceptClick}>
                        <i className={styles.docsActions__acceptIcon} />
                        {acceptBtnText || 'Подписать'}
                    </AppBtn>
                )}
                <AppBtn className={styles.docsActions__cancelBtn}
                disabled={cancelBtnDisabled}
                onClick={cancelClick}>
                    <i className={styles.docsActions__cancelIcon} />
                    {cancelBtnText || 'Отменить'}
                </AppBtn>
            </div>
            <div className={styles.docsActions__right}>
                <div className={styles.docsActions__limitSelect}>
                    <AppLimitSelect getLimitValue={getLimit} />
                </div>
                <div className={styles.docsActions__syncXlsx}>
                    {syncClick && (
                        <AppBtn className={styles.docsActions__syncXlsx__btn + lowVisionClassName}
                        onClick={syncClick}>
                            <i className={styles.docsActions__refreshIcon} />
                            Синхронизация с ГНК
                        </AppBtn>
                    )}
                    <AppBtn className={styles.docsActions__syncXlsx__btn + lowVisionClassName}
                    onClick={xlsxClick}>
                        <i className={styles.docsActions__downloadCircleIcon} />
                        Реестр
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default DocsActions;