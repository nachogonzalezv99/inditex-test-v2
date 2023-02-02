import React, { createContext, useContext, useEffect, useState } from "react";
import { DomainEvents } from "../domain/DomainEvents";

const ShoppingCartContext = createContext({
    shoppingCartTotalItems: 0,
});

export function ShoppingCartContextProvider({ children, shoppingCartRepository }) {
    const [shoppingCartTotalItems, setShoppingCartTotalItems] = useState(0);

    useEffect(() => {
        shoppingCartRepository.search().then((totalItems) => {
            console.log(totalItems)
            setShoppingCartTotalItems(totalItems);
        });
    }, [shoppingCartRepository]);

    useEffect(() => {
        const reloadShoppingCartTotalItems = () => {
            shoppingCartRepository.search().then(setShoppingCartTotalItems);
        };

        document.addEventListener(DomainEvents.shoppingCartAdded, reloadShoppingCartTotalItems);

        return () => {
            document.removeEventListener(DomainEvents.shoppingCartAdded, reloadShoppingCartTotalItems);
        };
    }, [shoppingCartRepository]);

    return (
        <ShoppingCartContext.Provider value={{ shoppingCartTotalItems }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export const useShoppingCartContext = () => useContext(ShoppingCartContext);