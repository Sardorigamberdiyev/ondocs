import { FC } from 'react';
import { IStirWithId } from '../../../services/eimzo.service';
import { IStirListItemProps } from '../stir-list-item/stir-list-item';
import StirListItem from '../stir-list-item';
import styles from './stir-list.module.sass';

interface IStirListProps {
    stirs: IStirWithId[];
}

const StirList: FC<IStirListProps & Omit<IStirListItemProps, 'stir'>> = (props) => {
    const { stirs, itemHandler, itemValue } = props;

    const scrollStyle = stirs.length > 2 ? styles.scroll : '';

    return (
        <div 
        className={`${styles.stirList} ${scrollStyle}`}>
            {
                stirs.map((stir: IStirWithId) => {
                    return <StirListItem 
                    key={stir.id} 
                    stir={stir}
                    itemHandler={itemHandler}
                    itemValue={itemValue} />
                })
            }
        </div>
    )
}

export default StirList;