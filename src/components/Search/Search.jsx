import styles from './Search.module.scss'
const Search = ({ filter, onFilterChange }) => {

    return (
        <div className={styles.search}>
            <label htmlFor="filter" className={styles.search__label}>Search: </label>
            <input
                className={styles.search__input}
                id="filter"
                name="filter"
                value={filter}
                onChange={(e) => onFilterChange(e)}
            />
        </div>
    )
}
export { Search };
