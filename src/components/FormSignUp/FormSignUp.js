import React from 'react';
import './FormSignUp.css'

const FormSignUp = () => {
    return (
        <div className="form-signup text-center">
            <h3 className="mb-4">Create Account</h3>
            <form action="">
            <input type="text" name="username" placeholder="Enter Your Name"/> <br/>

            <input type="email" name="email" placeholder="Enter Your Email"/> <br/>

          
            <input type="password" name="password1" placeholder="Password"/> <br/>

            <input type="password" name="password2" placeholder="Confirm Password"/> <br/>

            <input type="submit" value="Create Account"/>
            </form> 
           

        </div>
    );
};

export default FormSignUp;