import { FC } from 'react';
import Image from 'next/image';

import { LayoutMain } from '../../components/layouts';
import { AppInput, AppLabel, AppCard, AppBtn } from '../../components/app';
import FormWrapper from '../../components/form-wrapper';
import RowForm from '../../components/forms/row-form';
import styles from './balance.module.sass';

const Balance: FC = () => {
    return (
        <LayoutMain pageName="Пополнить баланс">
            <AppCard>
                <RowForm 
                leftContent={
                    <FormWrapper text="Через карту">
                        <AppLabel text="Сумма">
                            <AppInput type="number"
                            placeholder="Введите сумму" />
                        </AppLabel>
                        <AppLabel text="Номер карты">
                            <AppInput type="number"
                            format="#### #### #### ####"
                            placeholder="0000 0000 0000 0000" />
                        </AppLabel>
                        <AppLabel text="Срок карты">
                            <AppInput
                            type="number"
                            format="##/##"
                            placeholder="00/00" />
                        </AppLabel>
                        <AppBtn>Оплатить</AppBtn>
                    </FormWrapper>
                }
                rightContent={
                    <div className={styles.balance__otherPayment}>
                        <h2>Другие способы оплаты</h2>
                        <div className={styles.balance__otherPayment__bankBook}>Номер счета: 122 132 434</div>
                        <div className={styles.balance__paymentList}>
                            <div className={styles.balance__paymentList__item}>
                                <div className={styles.balance__paymentName}>Click</div>
                                <div className={styles.balance__paymentLogo}>
                                    <Image 
                                    width={71}
                                    height={26}
                                    src="/images/click-logo.png" />
                                </div>
                            </div>
                            <div className={styles.balance__paymentList__item}>
                                <div className={styles.balance__paymentName}>Payme</div>
                                <div className={styles.balance__paymentLogo}>
                                    <Image 
                                    width={71}
                                    height={21}
                                    src="/images/payme-logo.png" />
                                </div>
                            </div>
                            <div className={styles.balance__paymentList__item}>
                                <div className={styles.balance__paymentName}>Apelsin</div>
                                <div className={styles.balance__paymentLogo}>
                                    <Image 
                                    width={21}
                                    height={21}
                                    src="/images/apelsin-logo.png" />
                                    <span>Apelsin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                } />
            </AppCard>
        </LayoutMain>
    )
}

export default Balance;