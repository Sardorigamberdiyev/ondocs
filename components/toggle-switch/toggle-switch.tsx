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
        classNameContent,
        checked, 
        styleType
    } = props;

    const classNames = `${styles.toggleSwitch} ${className || ''}`;
    const classNamesText =  `${styles.toggleSwitch__text} ${classNameText || ''} ${(checked ?? isActive) ? styles.toggleSwitch__isActive : ''}`;
    const classNamesContent = `${styles.toggleSwitch__content} ${classNameContent || ''} ${styleType === 'type-2' ? styles.toggleSwitch__type2 : ''}`;

    const toggleSwitchText = text && (
        <div className={classNamesText}
        style={textRowReverse ? {marginLeft: '12px'} : {marginRight: '12px'}}>
            {text}
        </div>
    );

    return (
        <div className={classNames}
        style={textRowReverse ? {flexDirection: 'row-reverse'} : {}}>
            {toggleSwitchText}
            <label className={classNamesContent}>
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