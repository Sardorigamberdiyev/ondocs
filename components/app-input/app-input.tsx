import { FC, useState } from 'react';
import { IAppInputProps } from './app-input.props';
import { PatternFormat, NumericFormat } from 'react-number-format';
import styles from './app-input.module.sass';

const AppInput: FC<IAppInputProps> = (props) => {
    const [inputFocus, setInputFoucus] = useState(false);

    const {
        id,
        type,
        format,
        name,
        value,
        placeholder,
        classNameInput,
        classNameIcon,
        className,
        iconUrl,
        disableTD,
        disabled,
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

    const isFouceInput = inputFocus ? styles.appInput__focused : '';
    const isDisableTD = disableTD ? styles.appInput__disableTD : '';

    return (
        <div className={`${className || ''} ${styles.appInput} ${isFouceInput} ${isDisableTD}`}>
            {format ? (
                <PatternFormat 
                id={id}
                format={format}
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                style={!iconUrl ? {width: '100%'} : {}}
                className={`${classNameInput || ''} ${isDisableTD}`}
                onChange={onChange}
                onFocus={() => setInputFoucus(true)}
                onBlur={() => setInputFoucus(false)} />
            ) : (
                <input 
                type={type}
                id={id}
                name={name}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                style={!iconUrl ? {width: '100%'} : {}}
                className={`${classNameInput || ''} ${isDisableTD}`}
                onChange={onChange}
                onFocus={() => setInputFoucus(true)}
                onBlur={() => setInputFoucus(false)} />
            )}
            {icon}
        </div>
    )
}

export default AppInput;