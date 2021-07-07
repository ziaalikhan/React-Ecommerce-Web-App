import React,{useState} from "react";
import "./Login.css";
import appLogo from "../images/appLogo.png";
import { Link, useHistory } from "react-router-dom";

import {auth} from '../config/firebase';

function Login() {


    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.
        signInWithEmailAndPassword(email,password)
        .then((auth) => {
          // console.log(auth);
          if(auth) {
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        // console.log(auth);
        if(auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={appLogo} alt="" />
      </Link>

      <div className='login_container'>
          <h3>Sign-In</h3>

          <form>
              <h5>E-mail</h5>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

              <button
              onClick={signIn}
              type='submit'
              className='signin_btn'>Sign In</button>

              <p>
                  Lorem ipsum dolor sit amet consectetur  explicabo tenetur omnis consequatur deleniti accusamus, tempora nam veritatis.
              </p>

              <button
              onClick={register}
              type='submit'
              className='register_btn'>Create your Account</button>
          </form>
          
      </div>
    </div>
  );
}

export default Login;
