import { FC, useState, useEffect } from 'react';
import AppDate from '../../app-date';
import AppInput from '../../app-input';
import AppLabel from '../../app-label';
import ToggleSwitch from '../../toggle-switch';
import RowForm from '../row-form';
import styles from './ttn-transportation-form.module.sass';

const TtnTransportationForm: FC = () => {
    const [isStock, setIsStock] = useState(true);
    const [isFromSellerToBuyer, setIsFromSellerToBuyer] = useState(false);
    const [isTrailer, setIsTrailer] = useState(false);
    const [isSemitrailer, setIsSemitrailer] = useState(false);
    const [isShippingAutomobile, setIsShippingAutomobile] = useState(false);
    const [isShippingRailway, setIsShippingRailway] = useState(false);

    return (
        <>
            <div className={styles.ttnTransportationForm__toggleRow}>
                <ToggleSwitch 
                className={styles.ttnTransportationForm__toggle}
                classNameText={styles.ttnTransportationForm__toggleText}
                text="Со склада на склад"
                styleType="type-2"
                checked={isStock}
                onChange={({target: {checked}}) => {
                    setIsStock(checked);
                    setIsFromSellerToBuyer(!checked);
                }} />
                <ToggleSwitch
                className={styles.ttnTransportationForm__toggle}
                classNameText={styles.ttnTransportationForm__toggleText}
                text="От продовца к покупателю"
                styleType="type-2"
                checked={isFromSellerToBuyer}
                onChange={({target: {checked}}) => {
                    setIsFromSellerToBuyer(checked);
                    setIsStock(!checked);
                }} />
            </div>
            <RowForm
            leftContent={
                <>
                    <RowForm
                    leftContent={
                        <>                        
                            <AppLabel text="К договору*">
                                <AppInput type="number"
                                placeholder="Номер договора" />
                            </AppLabel>
                            <AppLabel text="К путевому листу*">
                                <AppInput type="text"
                                placeholder="К путевому листу" />
                            </AppLabel>
                        </>
                    }
                    rightContent={
                        <>
                            <AppLabel text="От*">
                                <AppDate
                                placeholder="От*"
                                widthContainer="90%" 
                                onChange={(date) => console.log(date)} />
                            </AppLabel>
                            <AppLabel text="От*">
                                <AppDate
                                placeholder="От*"
                                widthContainer="90%"
                                onChange={(date) => console.log(date)} />
                            </AppLabel>
                        </>
                    } />
                    <AppLabel text="ФИО Водителя*">
                        <AppInput type="text"
                        placeholder="ФИО водителя" />
                    </AppLabel>
                </>
            }
            rightContent={
                <>
                    {isShippingAutomobile && (
                        <RowForm
                        leftContent={
                            <>
                                <AppLabel text="Гос.номер автом.*">
                                    <AppInput type="number"
                                    placeholder="Гос.номер автомобиля" />
                                </AppLabel>
                                <AppLabel text="Гос.номер*">
                                    <AppInput type="number"
                                    placeholder="Гос.номер" />
                                </AppLabel>
                                <ToggleSwitch 
                                className={styles.ttnTransportationForm__toggle}
                                classNameText={styles.ttnTransportationForm__toggleText}
                                text="Прицеп"
                                styleType="type-2"
                                checked={isTrailer}
                                onChange={({target: {checked}}) => {
                                    setIsTrailer(checked);
                                    setIsSemitrailer(false);
                                }} />
                            </>
                        }
                        rightContentStyle={{justifyContent: 'flex-end'}}
                        rightContent={
                            <>
                                <AppLabel text="Модель">
                                    <AppInput type="text"
                                    placeholder="Модель" />
                                </AppLabel>
                                <AppLabel text="Модель">
                                    <AppInput type="text"
                                    placeholder="Модель" />
                                </AppLabel>
                                <ToggleSwitch 
                                className={styles.ttnTransportationForm__toggle}
                                classNameText={styles.ttnTransportationForm__toggleText}
                                text="Полуприцем" 
                                styleType="type-2"
                                checked={isSemitrailer}
                                onChange={({target: {checked}}) => {
                                    setIsSemitrailer(checked);
                                    setIsTrailer(false);
                                }} />
                            </>
                        } />
                    )}
                    {isShippingRailway && (
                        <>
                            <RowForm
                            leftContent={
                                <AppLabel text="Номер вагона">
                                    <AppInput type="number"
                                    placeholder="Номер вагона" />
                                </AppLabel>
                            }
                            rightContent={
                                <AppLabel text="Модель вагона*">
                                    <AppInput type="text"
                                    placeholder="Модель" />
                                </AppLabel>
                            } />
                        </>
                    )}
                    <ToggleSwitch 
                    className={styles.ttnTransportationForm__toggle}
                    classNameText={styles.ttnTransportationForm__toggleText}
                    text="Перевозка автомабильным транспортом"
                    styleType="type-2"
                    checked={isShippingAutomobile}
                    onChange={({target: {checked}}) => {
                        setIsShippingAutomobile(checked);
                        setIsShippingRailway(!checked);
                    }} />
                    <ToggleSwitch
                    classNameText={styles.ttnTransportationForm__toggleText}
                    text="Перевозка по железной дороге"
                    styleType="type-2"
                    checked={isShippingRailway}
                    onChange={({target: {checked}}) => {
                        setIsShippingRailway(checked);
                        setIsShippingAutomobile(!checked);
                    }} />
                </>
            } />
        </>
    )
}

export default TtnTransportationForm;