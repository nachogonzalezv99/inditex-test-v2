import { useParams, Link } from 'react-router-dom'
import Accordion from './components/Accordion'
import styles from './ProductDetail.module.scss'
import { useProductDetail } from './useProductDetail'
import { useAddToCart } from "./useAddToCart"
import { TbArrowBackUp } from "react-icons/tb"
import { PublicRoutes } from '../../routes/routes'
import { ColorPicker } from './components/ColorPicker'
import { StoragePicker } from './components/StoragePicker'
import { Button } from '../../components/Button/Button'

export function ProductDetail({ productRepository, shoppingCartRepository }) {
    const { id: productId } = useParams()

    const { state,
        isColorSelected,
        handleColorClick,
        isStorageSelected,
        handleStorageClick,
    } = useProductDetail(productRepository, productId)

    const { save, isButtonDisabled } = useAddToCart(shoppingCartRepository, {
        productId: state.product.id,
        selectedColor: state.selectedColor,
        selectedStorage: state.selectedStorage
    })

    return (
        <div className={`${styles.productDetail} container section`}>
            <div className={styles.productDetail__imgContainer}>
                <Link to={PublicRoutes.PRODUCT_LIST}>
                    <TbArrowBackUp className={styles.productDetail__backIcon} />
                </Link>
                <img src={state.product.img} className={styles.productDetail__img} alt={state.product.model} />
            </div>
            <div>
                <div className={styles.productDetail__section}>
                    <h2>{state.product.model}</h2>
                    <h3 className={styles.productDetail__marca}>{state.product.brand}</h3>
                </div>
                <div className={styles.productDetail__section}>
                    <p>{state.product.price} €</p>
                </div>
                <div className={styles.productDetail__section}>
                    <h4>Color</h4>
                    <ColorPicker
                        product={state.product}
                        isColorSelected={isColorSelected}
                        handleColorClick={handleColorClick}
                    />
                </div>
                <div className={styles.productDetail__section}>
                    <h4>Storage</h4>
                    <StoragePicker
                        product={state.product}
                        isStorageSelected={isStorageSelected}
                        handleStorageClick={handleStorageClick}
                    />
                </div>
                <div className={styles.productDetail__section}>
                    <Button isButtonDisabled={isButtonDisabled} onClick={save} >
                        Add to cart
                    </Button>
                </div>
                <Accordion title="Technical information" product={state.product} />
            </div>
        </div>
    )
}
