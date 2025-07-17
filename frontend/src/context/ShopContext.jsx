import { createContext } from 'react';
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (Props) => {

    const currency = '$'; //ctrl+alt=₹
    const delivery_fee = 10;

    const value = {
        products, currency, delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {Props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
