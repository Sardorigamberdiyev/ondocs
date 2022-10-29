import { FC, PropsWithChildren } from 'react';
import styles from './layout.module.sass';

interface LayoutCardProps {
    className?: string
}

const LayoutCard: FC<PropsWithChildren<LayoutCardProps>> = ({children, className}) => {
    return (
        <div className={`${styles.layoutCard} ${className ?? ''}`}>
            {children}
        </div>
    )
}

export default LayoutCard;