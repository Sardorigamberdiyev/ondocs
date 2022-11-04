import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface IAppInputProps {
    type: 'text' | 'number' | 'password';
    id?: string;
    value?: string | number;
    placeholder?: string;
    name?: string;
    classNameInput?: string;
    classNameIcon?: string;
    className?: string;
    disableTD?: boolean;
    iconUrl?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onMouseUpIcon?: MouseEventHandler<HTMLElement>;
    onMouseDownIcon?: MouseEventHandler<HTMLElement>;
}