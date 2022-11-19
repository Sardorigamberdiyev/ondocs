import { FC } from 'react';
import { ICodeTableRowProps } from './code-table-row.interfaces';
import AppTableRow from '../../app-table-row';
import AppBtn from '../../app-btn';
import styles from './code-table-row.module.sass';

const CodeTableRow: FC<ICodeTableRowProps> = ({code, index, onDeleteCode}) => {
    return (
        <AppTableRow className={styles.codeTableRow}>
            <td>{index + 1}</td>
            <td>{code.classifierCode}</td>
            <td>{code.classifierName}</td>
            <td>
                <AppBtn className={styles.codeTableRow__btn}
                onClick={() => onDeleteCode(code.id)}>
                    <i className={styles.codeTableRow__trashIcon} />
                    Удалить
                </AppBtn>
            </td>
        </AppTableRow>
    )
}

export default CodeTableRow;