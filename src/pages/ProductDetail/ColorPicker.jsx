import styles from "./ColorPicker.module.scss"
export const ColorPicker = ({ product, isColorSelected, handleColorClick }) => {
    return (
        <div className={styles.colors}>
            {product?.colors?.map((color, index) => (
                <button
                    key={index}
                    {...(isColorSelected(color) && { "data-testid": "selected-color" })}
                    className={`${styles.colors__item} ${isColorSelected(color) && styles.colors__item__selected}`}
                    style={{ backgroundColor: `#${color}` }}
                    onClick={() => handleColorClick(color)} />
            ))}
        </div>
    )
}