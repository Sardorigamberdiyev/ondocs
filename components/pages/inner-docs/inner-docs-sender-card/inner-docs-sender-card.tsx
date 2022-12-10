import { FC } from 'react';
import ReactToPrint from 'react-to-print';
import { AppBtn, AppCard } from '../../../app';
import InvoicePaperPrint from '../../invoice/invoice-paper-print';
import { IInnerDocsSenderCardProps } from './inner-docs-sender-card.interfaces';
import styles from './inner-docs-sender-card.module.sass';

const InnerDocsSenderCard: FC<IInnerDocsSenderCardProps> = ({printClick}) => {
    return (
        <AppCard className={styles.innerDocsSenderCard}>
            <div className={styles.innerDocsSenderCard__header}>
                <div className={styles.innerDocsSenderCard__header__flexBetween}>
                    <h2>Счет фактура</h2>
                    <span>Статус документа в ГНК</span>
                </div>
                <div className={styles.innerDocsSenderCard__header__number}>№03-60378 от 31.03.2021</div>
                <div className={styles.innerDocsSenderCard__header__pin}>566800736</div>
            </div>
            <div className={styles.innerDocsSenderCard__body}>
                <div className={styles.innerDocsSenderCard__body__sender}>
                    <strong>Отправитель:</strong>
                    <div className={styles.innerDocsSenderCard__body__sender__name}>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "VENKON GROUP"</div>
                </div>
            </div>
            <div className={styles.innerDocsSenderCard__footer}>
                <div className={styles.innerDocsSenderCard__footer__date}>
                    <strong>Дата:</strong>
                    <div className={styles.innerDocsSenderCard__footer__date__value}>2021-04-09 12:40:13</div>
                </div>
                <div className={styles.innerDocsSenderCard__footer__btns}>
                    <AppBtn className={styles.innerDocsSenderCard__footer__btns__btn}>
                        <i className={styles.innerDocsSenderCard__downloadIcon} />
                        Скачать
                    </AppBtn>
                    <AppBtn className={styles.innerDocsSenderCard__footer__btns__btn}
                    onClick={printClick}>
                        <i className={styles.innerDocsSenderCard__printIcon} />
                        Печатать
                    </AppBtn>
                </div>
            </div>
        </AppCard>
    )
}

export default InnerDocsSenderCard;