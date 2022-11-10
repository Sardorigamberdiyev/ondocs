import { FC, useRef } from 'react';
import { IAppDateProps } from './app-date.props';
import DatePicker from 'react-datepicker';
import styles from './app-date.module.sass';
import "react-datepicker/dist/react-datepicker.css";

const AppDate: FC<IAppDateProps> = (props) => {
    const { onChange, placeholder, widthContainer, className, classNamePicker, disabled, selected } = props;
    const picker = useRef<DatePicker<never, undefined> | null>(null);

    return (
        <div className={`${styles.appDate} ${className || ''}`}>
            <div className={styles.appDate__container}
            style={widthContainer ? {width: widthContainer} : {}}>
                <DatePicker 
                ref={picker}
                className={`${styles.appDate__datePicker} ${classNamePicker || ''}`} 
                placeholderText={placeholder}
                disabled={disabled}
                selected={selected}
                onChange={onChange} />
                <i className={styles.appDate__calendarIcon}
                onClick={() => picker.current?.setOpen(true)} />
            </div>
        </div>
    )
}

export default AppDate;