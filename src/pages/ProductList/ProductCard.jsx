import { Link } from 'react-router-dom';
import styles from "./ProductCard.module.scss";

export function ProductCard({ product }) {
    return (
        <Link to={`/${product.id}`} className={styles.product}>
            <img className={styles.product__img} src={product.img} />
            <div className={styles.product__info}>
                <h3>{product.model}</h3>
                <p>{product.brand}</p>
                <p className={styles.product__price}>{product.price} €</p>
            </div>
        </Link>
    )
}