import React from 'react';
import './ProductsPlp.css'
import FirstCategory from '../../components/firstCategory/FirstCategory';

const ProductsPlp = () => {
    return (
        <>
            <div className="productsPlp">
                <h2 className='productsPlp__title'>Shop by Category</h2>
                <FirstCategory/>
            </div>
        </>
    );
}

export default ProductsPlp;
