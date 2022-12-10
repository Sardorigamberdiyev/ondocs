import { Dispatch, SetStateAction } from 'react';

export function changeStateObjValue<T extends object>(setValue: Dispatch<SetStateAction<T>>, oldValue: T, value: string, keys: (keyof T)[]) {
    const newValue = keys.reduce((pv, cv) => {
        return {
            ...pv,
            [cv]: value
        }
    }, {});

    setValue({
        ...oldValue,
        ...newValue
    });
}