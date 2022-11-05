import { FC, useState } from 'react';
import { IToggleSwitchProps } from './toggle-switch.props';
import styles from './toggle-switch.module.sass';

const ToggleSwitch: FC<IToggleSwitchProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { 
        onChange, 
        text, 
        textRowReverse, 
        inputName, 
        className,
        classNameText, 
        checked, 
        styleType
    } = props;

    const toggleSwitchText = text && (
        <div className={
            `${styles.toggleSwitch__text} ${isActive && styles.toggleSwitch__isActive} ${classNameText || ''}`
        }
        style={textRowReverse ? {marginLeft: '12px'} : {marginRight: '12px'}}>
            {text}
        </div>
    );

    return (
        <div className={`${styles.toggleSwitch} ${className || ''}`}
        style={textRowReverse ? {flexDirection: 'row-reverse'} : {}}>
            {toggleSwitchText}
            <label className={`${styles.toggleSwitch__content} ${styleType === 'type-2' ? styles.toggleSwitch__type2 : ''}`}>
                <input type="checkbox"
                name={inputName}
                checked={checked ?? isActive}
                onChange={(e) => {
                    setIsActive(e.target.checked);
                    if (onChange) onChange(e);
                }} />
                <span />
            </label>
        </div>
    )
}

export default ToggleSwitch;