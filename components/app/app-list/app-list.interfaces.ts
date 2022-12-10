
export interface IAppListProps {
    arrayData: any[] | null;
    loading: boolean;
    error: boolean;
    customErrorIndicator?: JSX.Element | undefined;
    customSpinner?: JSX.Element | undefined;
    customEmpty?: JSX.Element | undefined;
}