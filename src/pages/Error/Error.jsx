import { Link } from "react-router-dom";
import { PublicRoutes } from "../../routes/routes";
import styles from "./Error.module.scss";

export function Error() {
    return (
        <div className={styles.error}>
            <h1 className={styles.error__title}>
                We're sorry. The source requested could not be found on this server.
            </h1>
            <Link to={PublicRoutes.PRODUCT_LIST} className="btn btn--primary">
                Go home
            </Link>
        </div>
    );
};