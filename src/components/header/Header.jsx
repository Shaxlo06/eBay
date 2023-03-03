import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiHeart } from 'react-icons/fi'
import UseFetchData from '../../hooks/useFetchData';
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux';


const Header = () => {

    const location = useLocation()
    const categories = UseFetchData("/categories")
    const createUserData = useSelector(state => state)

    return (location.pathname === '/registr' || location.pathname === '/signin') ? <></> :(
        <header className='header'>
            <div className='container'>
                <div className="header-top">
                    <div className="header-top-left">
                    <p>Hi! <Link to='/signin'>Sign in</Link> or <Link to='/registr'>register</Link></p>
                    <ul className='header-left-list'>
                        <li className='header-left-item'>
                            <a className='headet-left-link' href="#">Daily Deals</a>
                        </li>
                        <li className='header-left-item'>
                            <a className='headet-left-link' href="#">Brand Outlet</a>
                        </li>
                        <li className='header-left-item'>
                            <a className='headet-left-link' href="#">Help & Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div className="header-top-right">
                        <ul className="headet-right-list">
                            <li className="header-right-item">
                                <a href="#" className="header-right-link">Sell</a>
                            </li>
                            <li className="header-right-item">
                                <a href="#" className="header-right-link">Watchlist</a>
                            </li>
                            <li className="header-right-item header-userEmail">
                                <a href="#" className="header-right-link "><FaUserCircle/>
                                {
                                    createUserData ? createUserData : "My eBay"
                                }                                   
                                </a>
                            </li>
                        </ul>
                        <Link to='/wishlist'>
                            <FiHeart/>
                        </Link>
                        <Link to='/cart'>
                            <FiShoppingCart/>
                        </Link>
                    </div>
                </div>
                <div className="header-search">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" width='117' height='48' alt="" />
                    <form className='header-search-form'>
                        <select className='header-shop-select' name='Shop by category'>
                            <option className='header-shop-option' hidden>Shop by category</option>
                            {
                                categories.map(category => 
                                    <option key={category.id} className='categories__name'>
                                    <Link to={`/category/${category.id}`}>
                                        {category.name}
                                    </Link>
                                    </option>  
                                )
                            }
                        </select>
                        <div className="search-wrapper">
                        <div className='search-elements'>
                             <FiSearch/> 
                             <input className='search__input' type="text" placeholder='Search for anything' />
                            <Link to='/products'>
                                <button className='search__input-select'>
                                  <a className='search__input-option'>All Categories</a>
                                </button>
                            </Link>
                        </div>
                        <button className='search__btn dodgerblue'>Search</button>
                        <button className='search__btn white'>Advanced</button>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
