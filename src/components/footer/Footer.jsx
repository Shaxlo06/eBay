import React from 'react';
import './Footer.css'
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='footer'>
           <ul className="footer-list">
                <li className="footer-item">
                    <h4><a href="#">Buy</a></h4>
                    <p><a href="#">Registration</a></p>
                    <p><a href="#">eBay Money Back Guarantee</a></p>
                    <p><a href="#">Bidding & buying help</a></p>
                    <p><a href="#">Stores</a></p>
                    <p><a href="#">eBay for Charity</a></p>
                    <p><a href="#">Charity Shop</a></p>
                    <p><a href="#">Charity Shop</a></p>
                </li>
                <li className="footer-item">
                    <h4><a href="#">Sell</a></h4>
                    <p><a href="#">Start selling</a></p>
                    <p><a href="#">How to sell</a></p>
                    <p><a href="#">Business sellers</a></p>
                    <p><a href="#">Affiliates</a></p>
                    <h4><a href="#">Tools & apps</a></h4>
                    <p><a href="#">Developers</a></p>
                    <p><a href="#">Security center</a></p>
                    <p><a href="#">Site map</a></p>
                </li>
                <li className="footer-item">
                    <h4><a href="#">Stay connected</a></h4>
                    <p><a href="#"><AiFillFacebook/> Facebook</a></p>
                    <p><a href="#"><AiFillTwitterSquare/> Twitter</a></p>
                </li>
                <li className="footer-item">
                    <h4><a href="#">About eBay</a></h4>
                    <p><a href="#">Company info</a></p>
                    <p><a href="#">News</a></p>
                    <p><a href="#">Investors</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Diversity & Inclusion</a></p>
                    <p><a href="#">Global Impact</a></p>
                    <p><a href="#">Government relations</a></p>
                    <p><a href="#">Advertise with us</a></p>
                    <p><a href="#">Policies</a></p>
                    <p><a href="#">Verified Rights Owner (VeRO) Program</a></p>
                    <p><a href="#">eCI Licenses</a></p>
                </li>
                <li className="footer-item">
                    <h4><a href="#">Help & Contact</a></h4>
                    <p><a href="#">Seller Center</a></p>
                    <p><a href="#">Contact Us</a></p>
                    <p><a href="#">eBay Returns</a></p>

                    <h4><a href="#">Community</a></h4>
                    <p><a href="#">Announcements</a></p>
                    <p><a href="#">eBay Community</a></p>
                    <p><a href="#">eBay for Business Podcast</a></p>
                    <h4><a href="#">eBay Sites</a></h4>
                </li>
            </ul> 
            <p className='footer-bottom-text'><a href="#">Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice...</a></p>
        </footer>
    );
}

export default Footer;
