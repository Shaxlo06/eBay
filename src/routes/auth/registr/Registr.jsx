import React, { useState } from 'react';
import './Registr.css'
import Container from '../../../utils/Container';
import Footer from '../../../utils/Footer-bottom';
import { Link } from 'react-router-dom';
import googleIcon from '../../../images/googleIcon.svg'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Registr = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
   })

   console.log(formData);

   const createUserWithEmail = (e) => {
    e.preventDefault()

    axios.post(`https://api.escuelajs.co/api/v1/users/`, formData)
    .then(res => {
        if(res.data.email){
            //send to store
            dispatch({
                email: res.data.email, 
                type: "CREATE_USER"
            })
            history.push('/')
        }
    })
    .catch(err => console.log(err))
   }

    return (
        <section className='registr'>
            <>
            <Container>
                <div className="registr-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" width='117' height='48' alt="" />
                </div>
                <div className="registr-middle">
                    <Link to='/signin'><i className='registr-middle-text'>Already a member? </i><strong> Sing in</strong></Link>
                </div>
                <div className="registr-create">
                    <h3 className='registr-create-title'>Create an account</h3>
                    <div className="registr-create-card">
                        <form onSubmit={createUserWithEmail} className="registr-create-card-left">
                            <div className="registr-form-top">
                                <input onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder='First name'/>
                                <input onChange={(e) => setFormData({...formData, lastName: e.target.value})} type="text" placeholder='Last name'/>
                            </div>
                            <input  onChange={(e) => setFormData({...formData, avatar: e.target.value})} type="url" placeholder='Avatar'/>
                            <input  onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder='Email'/>
                            <input  onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" placeholder='Password'/>
                            <p className='registr-form-text'>By Creating an account, you agree to our User Agreement  and acknowledge reading our User Privacy Notice .</p>
                            <button type='submit' className='registr-form-btn'>Create account</button>
                        </form>
                        <div className="registr-create-card-right">
                            <Link to=''>
                                <button className='registr-with-google'>
                                    <img src={googleIcon} alt="" />
                                    Continue with Google
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
            </>
        </section>
    );
}

export default Registr;
