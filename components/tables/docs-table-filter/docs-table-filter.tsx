import { FC, useState, useEffect } from 'react';
import { IDocsTableFilterProps } from './docs-table-filter.interfaces';
import styles from './docs-table-filter.module.sass';

const DocsTableFilter: FC<IDocsTableFilterProps> = (props) => {
    const [search, setSearch] = useState('');

    const {
        filterActive,
        filterOneText,
        filterTwoText,
        filterThreeText,
        filterFourText,
        filterFiveText,
        filterOneClick,
        filterTwoClick,
        filterThreeClick,
        filterFourClick,
        filterFiveClick,
        filterSearchClick,
        filterSearchChange
    } = props;

    useEffect(() => {
        if (filterSearchChange)
            filterSearchChange(search)
    }, [search])

    const activeClassName = styles.docsTableFilter__list__item__active;

    const oneActive = filterActive === 'filter-one' ? activeClassName : '';
    const twoActive = filterActive === 'filter-two' ? activeClassName : '';
    const threeActive = filterActive === 'filter-three' ? activeClassName : '';
    const fourActive = filterActive === 'filter-four' ? activeClassName : '';
    const fiveActive = filterActive === 'filter-five' ? activeClassName : '';

    return (
        <div className={styles.docsTableFilter}>
            <ul className={styles.docsTableFilter__list}>
                <li className={styles.docsTableFilter__list__item + ' ' + oneActive}
                onClick={filterOneClick}>{filterOneText}</li>
                <li className={styles.docsTableFilter__list__item + ' ' + twoActive}
                onClick={filterTwoClick}>
                    <div />
                    <span>{filterTwoText}</span>
                </li>
                <li className={styles.docsTableFilter__list__item + ' ' + threeActive}
                onClick={filterThreeClick}>
                    <div />
                    <span>{filterThreeText}</span>
                </li>
                {filterFourText && (
                    <li className={styles.docsTableFilter__list__item + ' ' + fourActive}
                    onClick={filterFourClick}>
                        <div />
                        <span>{filterFourText}</span>
                    </li>
                )}
                {filterFiveText && (
                    <li className={styles.docsTableFilter__list__item + ' ' + fiveActive}
                    onClick={filterFiveClick}>
                        <div />
                        <span>ТТН</span>
                    </li>
                )}
            </ul>
            <div className={styles.docsTableFilter__search}>
                <input type="text"
                placeholder="Поиск"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
                <div className={styles.docsTableFilter__iconWrapper}
                onClick={() => {
                    if (filterSearchClick)
                        filterSearchClick(search)
                }}>
                    <i className={styles.docsTableFilter__searchIcon} />
                </div>
            </div>
        </div>
    )
}

export default DocsTableFilter;