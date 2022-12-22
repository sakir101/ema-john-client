import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async() =>{
    const productData = await fetch('https://ema-john-server-sakir101.vercel.app/products');
    const {products} = await productData.json();
    const savedCart = getStoredCart();
    const initialCart = [];
  
    
    for(const id in savedCart){
        const addedProduct = products.find(product => product._id === id);
        if(addedProduct){
            
            const quantity = savedCart[id];
            addedProduct.quantity = quantity
            initialCart.push(addedProduct);
            
        }
    }
    return {products: products, initialCart: initialCart};
}