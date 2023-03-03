import React from 'react';
import './Categories.css'
import { Link } from 'react-router-dom'
import Container from '../../utils/Container';
import UseFetchData from '../../hooks/useFetchData';
import { FiHeart } from 'react-icons/fi'

const Categories = () => {
    const categories = UseFetchData("/categories")
    return (
        <section className='categories'>
            <Container>
                <div className="categories-wrapper">               
                    <div className="categories-links">
                    <p className='categories__name'>
                        <Link to="/">Home</Link>
                    </p>
                    <p className='categories__name'>
                        <Link to="/wishlist"><FiHeart/> Saved</Link>
                    </p>
                    </div>
                    <ul className="categories-list">
                {
                    categories.map(category => 
                        <div  className='categories__item' key={category.id}> 
                            <li className='categories__name'>
                                <Link to={`/category/${category.id}`}>
                                    {category.name}
                                </Link>
                            </li> 
                        </div>  
                    )
                }
                </ul>
                </div>
            </Container>
        </section>
    );
}

export default Categories;
