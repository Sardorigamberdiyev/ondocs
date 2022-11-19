import { FC } from 'react';
import { IDocsFormatTableRowProps } from './docs-format-table-row.interface';
import AppBtn from '../../app-btn';
import AppTableRow from '../../app-table-row';
import styles from './docs-format-table-row.module.sass';

const DocsFormatTableRow: FC<IDocsFormatTableRowProps> = ({index, docsFormat, onDeleteDocsFormat}) => {
    return (
        <AppTableRow className={styles.docsFormatTableRow}>
            <td>{index}</td>
            <td>{docsFormat.name}</td>
            <td>
                <AppBtn className={styles.docsFormatTableRow__btn}
                onClick={() => onDeleteDocsFormat(docsFormat.id)}>
                    <i className={styles.docsFormatTableRow__trashIcon} />
                    Удалить
                </AppBtn>
            </td>
        </AppTableRow>
    )
}

export default DocsFormatTableRow;