import React from 'react';
import './Ad.css'
import imgAd from '../../images/saveItAd.png'
import imgAd2 from '../../images/after-categories-ad.png'

const Ad = () => {
    return (
        <section className='ad'>
            <img src={imgAd} alt="" />
        </section>
    );
}

const Ad2 = () => {
    return (
        <section className='ad ad2'>
            <img src={imgAd2} alt="" />
        </section>
    );
}

export { Ad, Ad2 };
