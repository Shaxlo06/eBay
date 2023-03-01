import React from 'react';
import './Categories.css'
import { Link } from 'react-router-dom'
import Container from '../../utils/Container';
import UseFetchData from '../../hooks/useFetchData';
import { FiHeart } from 'react-icons/fi'

const Categories = () => {
    const categories = UseFetchData("/categories")
    console.log(categories);
    return (
        <section className='categories'>
            <Container>
                <ul className="categories-list">
                    <li className='categories__name'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='categories__name'>
                    <Link to="/wishlist"><FiHeart/> Saved</Link>
                    </li>
                {
                    categories.map(category => 
                        <div  className='categories__item' key={category.id}> 
                            <li className='categories__name'>
                                <Link to="/category">
                                    {category.name}
                                </Link>
                            </li> 
                        </div>  
                    )
                }
                </ul>
            </Container>
        </section>
    );
}

export default Categories;
