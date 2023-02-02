import { Link, Outlet } from "react-router-dom";
import { ApiShoppingCartRepository } from "../../infrastructure/ApiShoppingCartRepository";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Header } from "./Header";
import styles from "./Layout.module.scss";

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
