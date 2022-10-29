import { ChangeEventHandler, FC, useState } from 'react';
import styles from './toggle-switch.module.sass';

interface IToggleSwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    className?: string;
    text?: string;
    textRowReverse?: boolean;
    inputName?: string;
}

const ToggleSwitch: FC<IToggleSwitchProps> = (props) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const { onChange, text, textRowReverse, inputName, className, checked } = props;

    const toggleSwitchText = text && (
        <div className={`${styles.toggleSwitch__text} ${isActive && styles.isActive}`}
        style={textRowReverse ? {marginLeft: '12px'} : {marginRight: '12px'}}>
            {text}
        </div>
    );

    return (
        <div className={styles.toggleSwitch}
        style={textRowReverse ? {flexDirection: 'row-reverse'} : {}}>
            {toggleSwitchText}
            <label className={`${styles.toggleSwitch__content} ${className || ''}`}>
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