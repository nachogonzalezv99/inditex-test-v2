import { useParams } from 'react-router-dom'
import Accordion from './Accordion'
import styles from './ProductDetail.module.scss'
import { useProductDetail } from './useProductDetail'
import { useAddToCart } from "./useAddToCart"

export function ProductDetail({ productRepository, shoppingCartRepository }) {

    const { id: productId } = useParams()
    const { product,
        isColorSelected,
        handleColorClick,
        isStorageSelected,
        handleStorageClick,
        selectedColor,
        selectedStorage
    } = useProductDetail(productRepository, shoppingCartRepository, productId)

    const { save, isButtonDisabled } = useAddToCart(
        shoppingCartRepository,
        { productId, selectedColor, selectedStorage }
    )

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
                            <button
                                key={index}
                                className={`${styles.colors__item} ${isColorSelected(color) && styles.colors__item__selected}`}
                                style={{ backgroundColor: `#${color}` }}
                                onClick={() => handleColorClick(color)} />
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
                        onClick={save}
                    >
                        Añadir
                    </button>
                </div>


                <Accordion dion title="Technical information" product={product} />

            </div>
        </div>
    )
}
