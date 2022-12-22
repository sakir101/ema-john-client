import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Signup.css'
const Signup = () => {
    const [error, setError] = useState();
    const {createUser} = useContext(AuthContext);
    const handleSignup = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if(password.length < 6){
            setError('Password less than 6 char');
        }
        if(password !== confirm){
            setError('Password does not match');
            return;
        }

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err =>{
            console.error(err);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Signup</h2>
            <form action="" onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password'required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <input type="submit" className='btn-submit' value='Signup' />
                <p>Already have an account <Link to='/login'>Login</Link></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Signup;