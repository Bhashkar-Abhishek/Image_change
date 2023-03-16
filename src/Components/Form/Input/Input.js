import React from 'react'
import "./Input.css"

function Input() {
  return (
    <div>
               <div className="email">
              <label>Your Email</label><br />
              <input type="text" />
            </div>

            <div className="password">
              <label>Password</label><br />
              <input type="pasword" />
            </div>

    </div>
  )
}

export default Input
