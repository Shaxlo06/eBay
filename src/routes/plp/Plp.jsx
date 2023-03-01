import React from 'react';
import './Plp.css'
import Container from '../../utils/Container'
import SliderPlp from '../../components/sliderPlp/SliderPlp';
import ProductsPlp from '../../components/productsPlp/ProductsPlp';
import AllProductsPlp from '../../components/allProductsPlp/AllProductsPlp';


const Plp = () => {
    return (
        <Container>
            <SliderPlp/>
            <ProductsPlp/>
            <AllProductsPlp/>
        </Container>
    );
}

export default Plp;
