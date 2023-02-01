import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { ProductListFactory } from "./pages/ProductList/ProductListFactory";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: ProductListFactory.create(),
            },
            {
                path: "/post/:id",
                element: <ProductDetail />,
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
