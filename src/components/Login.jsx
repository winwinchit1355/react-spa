import React from 'react'
import Nav from './Nav'

export default function Login() {
  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <div>
        <form action="">
            <input type="tel" name="phone" />
            <input type="password" name="pa" />
        </form>
      </div>
    </div>
  )
}
