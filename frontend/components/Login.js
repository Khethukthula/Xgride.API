import React, { useState } from 'react';
import './LoginPopup.css';

function LoginPopup() {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="login-popup" onClick={closePopup}>
        <div className="login-container" onClick={e => e.stopPropagation()}>
          <h2>Welcome Back</h2>
          <div className="social-login">
            <button className="social-btn facebook-btn">Facebook</button>
            <button className="social-btn twitter-btn">Twitter</button>
            <button className="social-btn google-btn">Google</button>
          </div>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <div className="forgot-remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </div>
      </div>
    )
  );
}

export default LoginPopup;
