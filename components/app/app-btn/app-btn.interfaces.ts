import { FocusEventHandler, MouseEventHandler } from 'react';

export interface IAppBtnProps {
    className?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onFocus?: FocusEventHandler<HTMLButtonElement>;
    onBlur?: FocusEventHandler<HTMLButtonElement>;
}