import { ChangeEventHandler } from 'react';

export interface IToggleSwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    checked?: boolean;
    className?: string;
    classNameText?: string;
    styleType?: 'type-2';
    text?: string;
    textRowReverse?: boolean;
    inputName?: string;
}