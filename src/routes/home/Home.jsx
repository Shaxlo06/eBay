import React from 'react';
import './Home.css'
import Container from '../../utils/Container';
import Categories from '../../components/categories/Categories';
import SimpleSlider from '../../components/slider/Slider';
import { Ad, Ad2 } from '../../components/ad/Ad';
import FirstCategory from '../../components/firstCategory/FirstCategory';
import ProductsAll from '../../components/productsAll/ProductsAll';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
       <Container>
            <Categories/>
            <SimpleSlider/>
            <Ad/>
            <FirstCategory/>
            <ProductsAll/>
            <Ad2/>
            <Footer/>
       </Container>
    );
}

export default Home;
