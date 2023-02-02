import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'
import { Breadcrumbs } from "../Breadcrumbs/Breadcrumbs";
import { PublicRoutes } from '../../routes/routes'
import { ShoppingCartFactory } from "../ShoppingCart/ShoppingCartFactory";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} container`}>
                <div className={styles.header__main}>
                    <Link to={PublicRoutes.PRODUCT_LIST} className={styles.header__title}><img src="./imgs/logo.webp" /></Link>
                    <Breadcrumbs />
                </div>

                <ShoppingCartFactory />
            </div>

        </header>
    )
}
export { Header }