import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom'

const Shop = () => {
    // const { products, count } = useLoaderData()
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    
     useEffect(()=>{
        const url = `https://ema-john-server-sakir101.vercel.app/products?page=${page}&size=${size}`;
        fetch(url)
        .then(res => res.json())
        .then(data=>{ 
            setProducts(data.products);
            setCount(data.count);
        })
     },[page,size])

    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        const ids = Object.keys(storedCart); 
        console.log(ids);
        fetch('https://ema-john-server-sakir101.vercel.app/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => {
            for (const id in storedCart) {
            const addedProduct = data.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

        })
        
    }, [products])


    const addToCart = (selectedCart) => {
        let newCart = []
        const existCart = cart.find(product => product._id === selectedCart._id)
        if (!existCart) {
            selectedCart.quantity = 1;
            newCart = [...cart, selectedCart];
        }
        else {
            const restCart = cart.filter(product => product._id !== existCart._id)
            existCart.quantity = existCart.quantity + 1;
            newCart = [...restCart, existCart];
        }
        setCart(newCart);
        addToDb(selectedCart._id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product._id} product={product} handleAddToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                        <br />
                        <button>Show Review</button>
                    </Link>
                </Cart>
            </div>
            <div className="pagination">
                <p>Currently selected: {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number && 'selected'}
                        onClick={() => setPage(number)}
                    >
                        {number+1}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value) }>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;