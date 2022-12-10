import { FC } from 'react';
import { docsStatus } from '../../../../common/variables/data.variables';
import { AppBtn, AppCard } from '../../../app';
import { IInnerDocsStatusCardProps } from './inner-docs-status-card.interfaces';
import styles from './inner-docs-status-card.module.sass';

const InnerDocsStatusCard: FC<IInnerDocsStatusCardProps> = (props) => {
    const { status, signClick, copyClick, cancelClick } = props;
    return (
        <AppCard className={styles.innerDocsStatusCard}>
            <div className={styles.innerDocsStatusCard__info}>
                <h2>Статус:</h2>
                <div className={styles.innerDocsStatusCard__info__text}
                style={{color: docsStatus[status].ru.color}}>
                    <i className={styles.innerDocsStatusCard__info__text__icon}
                    style={{
                        maskImage: `url(${docsStatus[status].ru.icon})`,
                        WebkitMaskImage: `url(${docsStatus[status].ru.icon})`,
                        backgroundColor: docsStatus[status].ru.color
                    }} />
                    {docsStatus[status].ru.text}
                </div>
            </div>
            <div className={styles.innerDocsStatusCard__btns}>
                <div className={styles.innerDocsStatusCard__btns__row}>
                    <AppBtn className={styles.innerDocsStatusCard__btns__row__btnCopy}
                    onClick={copyClick}>
                        <i className={styles.innerDocsStatusCard__copyIcon} />
                        Копировать
                    </AppBtn>
                </div>
                {(status === 'waiting_signature' || status === 'draft') && (
                        <div className={styles.innerDocsStatusCard__btns__row}>
                            <AppBtn className={styles.innerDocsStatusCard__btns__row__btnSign}
                            onClick={signClick}>
                                <i className={styles.innerDocsStatusCard__acceptIcon} />
                                Подписать
                            </AppBtn>
                            <AppBtn className={styles.innerDocsStatusCard__btns__row__btnCancel}
                            onClick={cancelClick}>
                                <i className={styles.innerDocsStatusCard__cancelIcon} />
                                Отказаться
                            </AppBtn>
                        </div>
                    )
                }
            </div>
        </AppCard>
    )
}

export default InnerDocsStatusCard;