import React, { useEffect, useRef } from 'react';
import './Signin.css'
import Container from '../../../utils/Container';
import Footer from '../../../utils/Footer-bottom';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi'
import facebookBtn from '../../../images/facebookBtn.svg'
import googleIcon from '../../../images/googleIcon.svg'
import appleBtn from '../../../images/appleBtn.svg'
import  { signInWithGoogle } from '../../../firebase/firebaseConfig'


const Singin = () => {
    const preventDefault = (e) => {
        e.preventDefault()
    }
   
    return (
       <>
         <Container>
            <div className="singin-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" width='117' height='48' alt="" />
            </div>
            <form onClick={preventDefault} className="signin-form">
                <h3 className='signin-form-title'>Hello</h3>
                <p className='signin-form-subtitle'>
                    <Link to='/registr'>
                        <i className='signin-form-link'>Sign in to eBay or </i>
                        <strong> create an account</strong>
                    </Link>
                </p>
                <input type="email" placeholder='Username'/>
                <input type="email" placeholder='Email'/>
                <p>Created your account with a mobile number?</p>
                <p>Sign in with mobile</p>
                <button className='signin-form-continueBtn'>Continue</button>
                <p className='signin-form-text-or'>or</p>
                <div className="signin-form-btns">
                    <button className="signin-facebook-btn">
                        <img src={facebookBtn} alt="" />
                        <b>Continue with Facebook</b>
                    </button>
                    <button onClick={signInWithGoogle} className="signin-google-btn">
                        <img src={googleIcon} alt="" />
                        Continue with Google
                    </button>
                    <button className="signin-apple-btn">
                        <img src={appleBtn} alt="" />
                        Continue with Apple
                    </button>
                </div>
                <div className="form-texts">

                </div>
                <div className="form-bottom-alert">
                    <p className="form-bottom-alert-text">
                        <FiAlertCircle/> 
                        With this box checked, we'll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account.
                    </p>
                </div>
            </form>

        </Container>
        <Footer/>
       </>
    );
}

export default Singin;
