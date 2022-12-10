import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { IAppInputProps } from './app-input.interfaces';
import { PatternFormat } from 'react-number-format';
import styles from './app-input.module.sass';
import { RootState } from '../../../store/store';

const AppInput: FC<IAppInputProps> = (props) => {
    const [inputFocus, setInputFoucus] = useState(false);
    const isLowVision = useSelector((state: RootState) => state.lowVision.isActive);

    const {
        id,
        type,
        format,
        mask,
        name,
        value,
        placeholder,
        classNameInput,
        classNameIcon,
        className,
        iconUrl,
        disableTD,
        disabled,
        readOnly,
        onMouseDownIcon,
        onMouseUpIcon,
        onChange
    } = props;

    // icon element
    const icon = iconUrl ? 
    <i className={classNameIcon}
    onMouseDown={onMouseDownIcon}
    onMouseUp={onMouseUpIcon}
    style={{
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`
    }} /> : null;

    const isFouceInput = inputFocus ? ' ' + styles.appInput__focused : '';
    const isDisableTD = disableTD ? ' ' + styles.appInput__disableTD : '';
    const lowVisionClassName = isLowVision ? ' lowVision' : '';
    const lowVisionAutoFill = isLowVision ? ' ' + styles.lowVisionAutofill : '';

    return (
        <div className={styles.appInput + ' ' + (className || '') + isFouceInput + isDisableTD + lowVisionClassName}>
            {format ? (
                <PatternFormat 
                id={id}
                format={format}
                mask={mask}
                name={name}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder}
                style={!iconUrl ? {width: '100%'} : {}}
                className={(classNameInput || '') + ' ' + isDisableTD + lowVisionClassName}
                onChange={onChange}
                onFocus={() => setInputFoucus(true)}
                onBlur={() => setInputFoucus(false)} />
            ) : (
                <input 
                type={type}
                id={id}
                name={name}
                value={value}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                style={!iconUrl ? {width: '100%'} : {}}
                className={(classNameInput || '') + isDisableTD + lowVisionClassName + lowVisionAutoFill}
                onChange={onChange}
                onFocus={() => setInputFoucus(true)}
                onBlur={() => setInputFoucus(false)} />
            )}
            {icon}
        </div>
    )
}

export default AppInput;