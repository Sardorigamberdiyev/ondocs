import { FC, PropsWithChildren } from 'react';
import { ILayoutListProps } from './layout.interfaces';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const LayoutList: FC<PropsWithChildren<ILayoutListProps>> = (props) => {
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