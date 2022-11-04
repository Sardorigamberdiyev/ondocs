import { SyntheticEvent } from 'react';

export interface IAppDateProps {
    onChange: (date: Date | null, e: SyntheticEvent<any, Event>) => void;
    placeholder?: string;
}