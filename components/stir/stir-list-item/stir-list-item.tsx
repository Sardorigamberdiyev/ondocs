import { FC } from 'react';
import { IStirWithId } from '../../../services/eimzo.service';
import styles from './stir-list-item.module.sass';

export interface IStirListItemProps {
    stir: IStirWithId;
    itemHandler: (itemId: string) => void;
    itemValue: string | null;
}

const StirListItem: FC<IStirListItemProps> = (props) => {
    const { stir, itemHandler, itemValue } = props;
    const validTo: string = new Date(stir.validTo).toISOString();

    return (
        <div 
        className={styles.stirListItem}
        onClick={() => itemHandler(stir.id)}>
            <div className={styles.stirListItem__radioWrapper}>
                <input 
                type="radio"
                name="stir"
                checked={stir.id === itemValue}
                value={stir.id}
                onChange={(e) => itemHandler(e.target.value)} />
            </div>
            <div className={styles.stirListItem__contentInfo}>
                <ul>
                    <li>
                        <strong>Стир: </strong>{stir.TIN}
                    </li>
                    <li>
                        <strong>Ташкилот: </strong>{stir.O}
                    </li>
                    <li>
                        <strong>Ф.И.О: </strong>{stir.CN}
                    </li>
                    <li>
                        <strong>Амал килиш мудати: </strong>{validTo}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StirListItem;