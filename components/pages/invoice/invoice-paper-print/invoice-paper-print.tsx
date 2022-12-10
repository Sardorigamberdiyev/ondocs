import React, { ForwardedRef, forwardRef } from 'react';
import QRCode from 'react-qr-code';

import { AppBtn, AppTable, AppTableBody, AppTableFoot, AppTableHead, AppTableRow } from '../../../app';
import { invoiceTypeList } from '../../../../common/variables/data.variables';
import { IInvoicePaperPrintProps } from './invoice-paper-print.interfaces';
import InvoiceTableRow from '../invoice-table-row';
import MainDocsInfo from './main-docs-info';
import SignLine from './sign-line';
import SignIndicator from './sign-indicator';
import styles from './invoice-paper-print.module.sass';

const InvoicePaperPrint = forwardRef((props: IInvoicePaperPrintProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { 
        closeClick,
        invoiceData: {
            facturaType,
            singleSidedType,
            productList: {
                products,
                hasCommittent,
                hasExcise,
                hasLgota,
                hasMedical
            },
            sellerTin,
            buyerTin,
            seller,
            buyer
        }
    } = props;

    return (
        <div className={styles.invoicePaperPrint}
        ref={ref}>
            <AppBtn 
            className={styles.invoicePaperPrint__closeBtn}
            onClick={closeClick}>Закрыть</AppBtn>
            <div className={styles.invoicePaperPrint__header}>
                <h1 className={styles.invoicePaperPrint__header__name}>Счёт-фактура № 22020</h1>
                <div className={styles.invoicePaperPrint__header__signTitle}>Хужжат имзоланган:</div>
                <div className={styles.invoicePaperPrint__header__signRow}>
                    <SignIndicator
                    side={1}
                    date="02.12.2022"
                    series="123123"
                    stir="12312312332"
                    fullName="Игамбердиев Сардор"
                    company="OOO RAQAMLI DUNYO"
                    email="sardorigamberdiyev1998@gmail.com" />
                    <QRCode 
                    value="123123"
                    size={152} />
                </div>
                <div className={styles.invoicePaperPrint__header__docsId}>
                    <div className={styles.invoicePaperPrint__header__docsId__value}>123123123123123123</div>
                    <div className={styles.invoicePaperPrint__header__docsId__description}>Электрон хужжат идентификатори</div>
                </div>
                <div className={styles.invoicePaperPrint__header__docsType}>
                    <div className={styles.invoicePaperPrint__header__docsType__wrapper}>{invoiceTypeList.find((type) => type.value === facturaType.toString())?.label}</div>
                </div>
            </div>
            <div className={styles.invoicePaperPrint__main}>
                <div className={styles.invoicePaperPrint__main__docsTitle}>10.05.2022 даги 292782-сонли шартномага 13.05.2022 даги 292782-1 сонли хтсоб варак-фактура</div>
                <div className={styles.invoicePaperPrint__main__docsDataRow}>
                    <MainDocsInfo 
                        side="first"
                        tin={sellerTin}
                        national={seller} />
                    {!singleSidedType ? (
                        <MainDocsInfo 
                        side="second"
                        tin={buyerTin}
                        national={buyer} />
                    ) : (
                        <div>Односторонний счет</div>
                    )}
                </div>
                <div className={styles.invoicePaperPrint__main__tableWrapper}>
                    <AppTable>
                        <AppTableHead>
                            <AppTableRow>
                            <th>№</th>
                                {hasCommittent && (
                                    <>
                                        <th>ИНН комитента</th>
                                        <th>Наименование комитента</th>
                                        <th>Рег. код плательщика НДС комитента</th>
                                    </>
                                )}
                                <th>ИКПУ и наименование товаров (работ, услуг)*</th>
                                <th>Описание товаров (работ, услуг)*</th>
                                <th>Штрих код товара/услуги</th>
                                {hasMedical && <th>Серия</th>}
                                <th>Ед. измер.*</th>
                                {hasMedical && (
                                    <>
                                        <th>Базовая цена</th>
                                        <th>% добавочной стоимость</th>
                                    </>
                                )}
                                <th>Кол-во</th>
                                <th>Цена</th>
                                {hasExcise && (
                                    <>
                                        <th>
                                            <div className={styles.invoicePaperPrint__excise}>Акциз,ставка</div>
                                            <select name="excise"
                                            value="sum"
                                            disabled>
                                                <option value="sum">Сумма</option>
                                                <option value="percent">Процентах</option>
                                            </select>
                                        </th>
                                        <th>Акциз, сумма</th>
                                    </>
                                )}
                                <th>Стоимость поставки*</th>
                                <th>НДС, %</th>
                                <th>НДС, Сумма*</th>
                                <th>Всего*</th>
                                {hasLgota && <th>Льгота</th>}
                            </AppTableRow>
                        </AppTableHead>
                        <AppTableBody>
                            {
                                products.map((product, index) => (
                                    <InvoiceTableRow
                                    key={product.id}
                                    index={index}
                                    product={product}
                                    hasCommittent={hasCommittent}
                                    hasExcise={hasExcise}
                                    hasLgota={hasLgota}
                                    hasMedical={hasMedical}
                                    onlyView />
                                ))
                            }
                        </AppTableBody>
                        <AppTableFoot>
                            <AppTableRow>
                                <td colSpan={7 + (hasCommittent ? 3 : 0) + (hasMedical ? 3 : 0)}>Итого:</td>
                                {hasExcise && (
                                    <>
                                        <td />
                                        <td>0.00</td>
                                    </>
                                )}
                                <td>0.00</td>
                                <td></td>
                                <td>0.00</td>
                                <td>0.00</td>
                                {hasLgota && <td />}
                            </AppTableRow>
                        </AppTableFoot>
                    </AppTable>
                </div>
                <div className={styles.invoicePaperPrint__main__totalPrice}>Жами тулов учун: Йигирма етти миллтон икки юз кирк етти минг бир юз йигирм турт сум 00 тийин. ККС сиз</div>
            </div>
            <div className={styles.invoicePaperPrint__footer}>
                <div className={styles.invoicePaperPrint__footer__row}>
                    <div className={styles.invoicePaperPrint__footer__row__left}>
                        <SignLine 
                        lineLabel="Рахбар:"
                        lineDescription="Подпись"
                        lineFullName="И.С Шокир угли" />
                        <SignLine 
                        lineLabel="Бош хисобчи М.У (мухр булса):"
                        lineDescription="Подпись"
                        lineFullName="И.С Шокир угли" />
                        <SignLine 
                        lineLabel="Рахбар:"
                        lineDescription="Подпись" />
                    </div>
                    <div className={styles.invoicePaperPrint__footer__row__right}>
                        <SignLine
                        lineLabel="Олди:"
                        lineDescription="(Олувчи йоки ваколатли шахс имзоси)" />
                        <SignLine
                        lineLabel="Ишончнома:"
                        lineDescription="(Олувчи йоки ваколатли шахс имзоси)"
                        lineValue="№ 21 дан 13.05.2022" />
                        <SignLine
                        lineDescription="Кабул килувчининг ФИШ"
                        lineValue="Ботиров Асадбек Олим угли" />
                    </div>
                </div>
            </div>
        </div>
    )
});

export default InvoicePaperPrint;