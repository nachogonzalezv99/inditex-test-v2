import { useParams, Link } from 'react-router-dom'
import Accordion from './Accordion'
import styles from './ProductDetail.module.scss'
import { useProductDetail } from './useProductDetail'
import { useAddToCart } from "./useAddToCart"
import { TbArrowBackUp } from "react-icons/tb"
import { PublicRoutes } from '../../routes/routes'
import { ColorPicker } from './ColorPicker'
import { StoragePicker } from './StoragePicker'
import { Button } from '../../components/Button/Button'

export function ProductDetail({ productRepository, shoppingCartRepository }) {
    const { id: productId } = useParams()

    const { product,
        isColorSelected,
        handleColorClick,
        isStorageSelected,
        handleStorageClick,
        selectedColor,
        selectedStorage
    } = useProductDetail(productRepository, productId)

    const { save, isButtonDisabled } = useAddToCart(
        shoppingCartRepository,
        { productId: product.id, selectedColor, selectedStorage }
    )

    return (
        <div className={`${styles.productDetail} container section`}>
            <div className={styles.productDetail__imgContainer}>
                <Link to={PublicRoutes.PRODUCT_LIST}>
                    <TbArrowBackUp className={styles.productDetail__backIcon} />
                </Link>
                <img src={product.img} className={styles.productDetail__img} alt={product.model} />
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
                    <ColorPicker
                        product={product}
                        isColorSelected={isColorSelected}
                        handleColorClick={handleColorClick}
                    />
                </div>
                <div className={styles.productDetail__section}>
                    <h4>Storage</h4>
                    <StoragePicker
                        product={product}
                        isStorageSelected={isStorageSelected}
                        handleStorageClick={handleStorageClick}
                    />
                </div>
                <div className={styles.productDetail__section}>
                    <Button isButtonDisabled={isButtonDisabled} onClick={save} >
                        Add to cart
                    </Button>
                </div>
                <Accordion title="Technical information" product={product} />
            </div>
        </div>
    )
}
