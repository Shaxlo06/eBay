import React from 'react';
import './SingleProduct.css'
import { Link, useParams } from 'react-router-dom';
import Container from '../../utils/Container';
import Footer from '../../utils/Footer-bottom';
import UseFetchData from '../../hooks/useFetchData';

const SingleProduct = () => {
    const productIdData = useParams()
    const data = UseFetchData(`/products/${productIdData.id}`)

    return (
        <>
            <Container>
            <section className='singleProduct'>
                <h2 className='singleProduct-heading'>EXTRA $10 OFF 3+ ITEMS WITH CODE 10OFF2023TECH</h2>
                <div className="singleProduct-left">
                    <div className="images">
                        <img className='singleProduct-similarImg' src={data.images} alt="" />
                        <img className='singleProduct-similarImg' src={data.images} alt="" />
                        <img className='singleProduct-similarImg' src={data.images} alt="" />
                    </div>
                     <img className='singleProduct-img'  src={data.images} alt="" />
                <div className="singleProduct-right">
                    <h3 className='singleProduct-title'>Name: {data.title}</h3>
                    <h3 className='singleProduct-desc'>Description: {data.description}</h3>
                    <h3 className='singleProduct-at'>Updated at: {data.updatedAt}</h3>
                    <h3 className='singleProduct-at'>Creation at: {data.creationAt}</h3>
                    <div className="singleProduct-buy">
                        <p className='singleProduct-price'>Price: <strong className='singleProduct-price-strong'>US ${data.price}</strong></p>
                        <div className="singleProduct-buy-btns">
                            <button className="singleProduct-buy-buyNow">Buy It Now</button>
                            <Link to='/cart'>
                                <button className="singleProduct-buy-addCart">Add to cart</button>
                            </Link>
                            <Link to='/wishlist'>
                                <button className="singleProduct-buy-addWatchlist">Add to Watchlist</button>
                            </Link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </Container>
        <Footer/>
        </>
    );
}

export default SingleProduct;
