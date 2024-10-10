import React from 'react'
import { LoginContainer } from './style'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm'
import LoginPassReset from './LoginForm/LoginPassReset'
import LoginPassLost from './LoginForm/LoginPassLost'
import LoginCreate from './LoginForm/LoginCreate'

function Login() {
  return (
    <LoginContainer>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate/>} />
        <Route path="perdeu" element={<LoginPassLost />} />
        <Route path="reset" element={<LoginPassReset />} />
      </Routes>
    </LoginContainer>
  );
}

export default Login