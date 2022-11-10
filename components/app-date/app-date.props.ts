import { SyntheticEvent } from 'react';

export interface IAppDateProps {
    onChange: (date: Date | null, e: SyntheticEvent<any, Event>) => void;
    placeholder?: string;
    widthContainer?: string;
    disabled?: boolean;
    selected?: Date | null;
    className?: string;
    classNamePicker?: string;
}