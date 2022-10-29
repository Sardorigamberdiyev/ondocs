import { MouseEventHandler } from 'react';

export interface IAppBtnProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}