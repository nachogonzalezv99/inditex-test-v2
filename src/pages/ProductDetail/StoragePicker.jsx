import styles from "./StoragePicker.module.scss"
export const StoragePicker = ({ product, isStorageSelected, handleStorageClick }) => {
    return (
        <div className={styles.storage}>
            {product?.storage?.map((storage, index) => (
                <button
                    key={index}
                    className={`${styles.storage__item} ${isStorageSelected(storage) && styles.storage__item__selected}`}
                    onClick={() => handleStorageClick(storage)}
                >
                    {storage} GHz
                </button>
            ))}
        </div>
    )
}