import { FC, PropsWithChildren } from 'react';
import { ILayoutDocCreationProps } from './layout-document-creation.interfaces';
import { AppBtn } from '../../app';
import styles from './layout-document-creation.module.sass';

const LayoutDocumentCreation: FC<PropsWithChildren<ILayoutDocCreationProps>> = (props) => {
    const { children, cancelHandler, viewDocHandler, saveHandler, signHandler } = props;
    return (
        <div className={styles.layoutDocumentCreation}>
            {children}
            <div className={styles.layoutDocumentCreation__lowerBtns}>
                <div className={styles.layoutDocumentCreation__wrapperBtns}>
                    <AppBtn className={styles.layoutDocumentCreation__btnCancel}
                    onClick={cancelHandler}>
                        <i className={styles.layoutDocumentCreation__cancelIcon} />
                        Отменить
                    </AppBtn>
                    <AppBtn className={styles.layoutDocumentCreation__btnViewDoc}
                    onClick={viewDocHandler}>
                        <i className={styles.layoutDocumentCreation__acceptIcon} />
                        Показать документ
                    </AppBtn>
                </div>
                <div className={styles.layoutDocumentCreation__wrapperBtns}>
                    <AppBtn className={styles.layoutDocumentCreation__btnSave}
                    onClick={saveHandler}>
                        <i className={styles.layoutDocumentCreation__diskIcon} />
                        Сохранить
                    </AppBtn>
                    <AppBtn className={styles.layoutDocumentCreation__btnSign}
                    onClick={signHandler}>
                        <i className={styles.layoutDocumentCreation__seenIcon} />
                        Подписать
                    </AppBtn>
                </div>
            </div>
        </div>
    )
}

export default LayoutDocumentCreation;