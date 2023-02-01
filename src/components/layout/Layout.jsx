import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

export function Layout() {
    return (
        <>
            <header className={styles.header}>
                <Link to="/">Main </Link>
                <h1>Header</h1>
            </header>
            <Outlet />
        </>
    );
}
