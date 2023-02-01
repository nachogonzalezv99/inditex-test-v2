import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./ProductCard.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export function ProductCardsSkeleton({ numOfWidgets }) {
    return (
        <>
            <SkeletonTheme baseColor="#e5e5e5" highlightColor="#efefef">
                {[...new Array(numOfWidgets)].map((_, i) => (
                    <div className={styles.product} key={i}>
                        <div className={styles.product__img} >
                            <Skeleton height={'100%'} style={{ borderRadius: 0, lineHeight: 'inherit' }} />
                        </div>
                        <div className={styles.product__info}>
                            <h3><Skeleton width={200} /></h3>
                            <p><Skeleton width={100} /></p>
                            <p className={styles.product__price}><Skeleton width={30} /></p>
                        </div>
                    </div>
                ))}
            </SkeletonTheme>
        </>
    )
}

