import React from 'react';

const Footer = (props) => {
    return (
        <footer className='footer-bottom'>
            {props.children}
            <p className='footer-bottom-text'><a href="#">Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice...</a></p>
        </footer>
    );
}

export default Footer;
