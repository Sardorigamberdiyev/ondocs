import { FC, PropsWithChildren } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

interface IPropsLayoutList {
    arrayData: any[] | null;
    loading: boolean;
    error: boolean;
    customErrorIndicator?: JSX.Element | undefined;
    customSpinner?: JSX.Element | undefined;
    customEmpty?: JSX.Element | undefined;
}

const LayoutList: FC<PropsWithChildren<IPropsLayoutList>> = (props) => {
    const { children, arrayData, loading, error, customSpinner, customErrorIndicator, customEmpty } = props;

    const spinner = loading && !error ? 
    customSpinner || <Spinner /> : 
    null;
    
    const errorContent = !loading && error ? 
    customErrorIndicator || <ErrorIndicator /> : 
    null;

    const emptyContent = !loading && !error && !arrayData?.length ? 
    customEmpty || <div>Данных нет</div> : 
    null;

    const dataContent = !loading && !error && arrayData?.length ? 
    children : 
    null;

    return (
        <>
        {spinner}
        {errorContent}
        {emptyContent}
        {dataContent}
        </>
    );
}

export default LayoutList;