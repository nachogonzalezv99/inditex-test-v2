import { useParams } from 'react-router-dom'
import Accordion from './Accordion'
import styles from './ProductDetail.module.scss'
import { useProductDetail } from './useProductDetail'


export function ProductDetail({ productRepository }) {

    const { id: productId } = useParams()
    const { product,
        isLoading,
        isColorSelected,
        selectedColor,
        handleColorClick,
        isStorageSelected,
        handleStorageClick,
        isButtonDisabled,
        handleClick
    } = useProductDetail(productRepository, productId)

    return (
        <div className={`${styles.productDetail} container section`}>
            <div>
                <img src={product.img} className={styles.productDetail__img} />
            </div>
            <div>

                <div className={styles.productDetail__section}>
                    <h2>{product.model}</h2>
                    <h3 className={styles.productDetail__marca}>{product.brand}</h3>
                </div>

                <div className={styles.productDetail__section}>
                    <p>{product.price} €</p>
                </div>

                <div className={styles.productDetail__section}>
                    <h4>Color</h4>
                    <div className={styles.colors}>

                        {product?.colors?.map((color, index) => (
                            <>
                                <label htmlFor={color} style={{ backgroundColor: `#${color}` }}
                                    className={`${styles.colors__label} ${isColorSelected(color) && styles.colors__label__selected}`}></label>
                                <input
                                    type="radio"
                                    defaultChecked={selectedColor === color ? true : false}
                                    data-testid="select-option"
                                    id={color}

                                    name="colors"
                                    key={index}
                                    value={color}
                                    className={styles.colors__input}
                                    onChange={() => handleColorClick(color)}
                                />
                                {/* <button
                                    key={index}
                                    className={`${styles.colors__item} ${isColorSelected(color) && styles.colors__item__selected}`}
                                    style={{ backgroundColor: `#${color}` }}
                                    onClick={() => handleColorClick(color)} /> */}
                            </>
                        ))}
                    </div>

                </div>

                <div className={styles.productDetail__section}>

                    <h4>Storage</h4>
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
                </div>

                <div className={styles.productDetail__section}>
                    <button
                        className='btn btn--primary'
                        disabled={isButtonDisabled()}
                        onClick={handleClick}
                    >Añadir
                    </button>
                </div>


                <Accordion dion title="Technical information" product={product} />

            </div>
        </div>
    )
}
