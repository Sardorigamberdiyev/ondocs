import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import AppBtn from '../app-btn';
import styles from './app-pagination.module.sass';

const AppPagination: FC = () => {
    return (
        <ReactPaginate 
        className={styles.appPagination}
        pageClassName={styles.appPagination__page}
        activeClassName={styles.appPagination__page__active}
        pageLinkClassName={styles.appPagination__pageLink}
        activeLinkClassName={styles.appPagination__pageLink__active}
        breakClassName={styles.appPagination__break}
        breakLinkClassName={styles.appPagination__breakLink}
        previousLabel={
            <AppBtn className={styles.appPagination__prev}>
                <i className={styles.appPagination__leftArrowIcon} />
                <span>Назад</span>
            </AppBtn>
        }
        nextLabel={
            <AppBtn className={styles.appPagination__next}>
                <span>Следующая</span>
                <i className={styles.appPagination__rightArrowIcon} />
            </AppBtn>
        }
        pageCount={30}
        marginPagesDisplayed={3}
        pageRangeDisplayed={1} />
    )
}

export default AppPagination;