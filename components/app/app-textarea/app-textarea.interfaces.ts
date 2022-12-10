import { ChangeEventHandler } from 'react';

export interface IAppTextareaProps {
    name?: string;
    placeholder?: string;
    className?: string;
    cols?: number;
    rows?: number;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}