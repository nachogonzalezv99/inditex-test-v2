import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './ShoppingCart.module.scss'

export function ShoppingCart({ shoppingCartTotalItems }) {
    return (
        <div className={styles.cart}>
            <AiOutlineShoppingCart className={styles.cart__icon} />
            {shoppingCartTotalItems !== 0 && <span className={styles.cart__total}>
                {shoppingCartTotalItems > 9 ? '9+' : shoppingCartTotalItems}
            </span>}

        </div>
    )
}