import React from 'react'
import '~/auth/style/index.css';
import FacebookLogin from 'react-facebook-login';
const Register = () => {
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div className='auth-container'>
        <div className='auth'>
          <FacebookLogin
          appId="1414701995637233"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook} 
          textButton='Đăng Ký với Facebook'/>
        </div>
    </div>
  )
}

export default Register