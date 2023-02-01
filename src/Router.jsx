import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProductDetailFactory } from "./pages/ProductDetail/ProductDetailFactory";
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
                path: "/:id",
                element: ProductDetailFactory.create()
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
