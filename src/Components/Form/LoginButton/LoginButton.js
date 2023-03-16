import React from 'react'
import "./LoginButton.css"

function LoginButton() {
  return (
    <div>
        <div className="checkbox">
              <div>
                <input type="checkbox" />
                <p>Remember me</p>
              </div >
              <a href="">Forgot Password?</a>
            </div>

            <div className="login">
              <button>login</button>
            </div>

    </div>
  )
}

export default LoginButton
