import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { ProductDetailFactory } from "../pages/ProductDetail/ProductDetailFactory";
import { ProductListFactory } from "../pages/ProductList/ProductListFactory";
import { PublicRoutes } from "./routes";

const router = createBrowserRouter([
    {
        path: PublicRoutes.PRODUCT_LIST,
        element: <Layout />,
        children: [
            {
                path: PublicRoutes.PRODUCT_LIST,
                element: ProductListFactory.create(),
            },
            {
                path: PublicRoutes.PRODUCT_DETAILS,
                element: ProductDetailFactory.create()
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
