import React from 'react';
import './AllProductsPlp.css'
import { Link } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';

const AllProductsPlp = () => {
    const allProductsPlp = UseFetchData("/products")

    function trimDescription(str) {
        return str.split(" ").slice(0, 7).join(" ") + "..."
    }

    return (
        <section className='allProductsPlp'>
            <ul className="allProductsPlp-list">
            {
                allProductsPlp.map(productsAll => 
                    <div  className='allProductsPlp__item' key={productsAll.id}> 
                        <li className='allProductsPlp__name'>
                            <Link to={`/product/${productsAll.id}`}>
                                <img className='allProductsPlp__img' src={productsAll.images[0]} alt="" />
                                <h3 className='allProductsPlp__heading'>{productsAll.title}</h3>
                                <p className='allProductsPlp__desc'>{trimDescription(productsAll.description)}</p>
                                <p className='allProductsPlp__price'>${productsAll.price}</p>
                            </Link>
                        </li> 
                    </div>  
                )
            }
            </ul>
    </section>
    );
}

export default AllProductsPlp;
