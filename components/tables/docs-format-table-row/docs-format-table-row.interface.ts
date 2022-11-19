
export interface IDocsFormatTableRowProps {
    index: number;
    docsFormat: {
        id: string;
        name: string;
    };
    onDeleteDocsFormat: (docsFormatId: string) => void;
}