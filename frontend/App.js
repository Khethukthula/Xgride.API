import React, { useState } from "react";
import "./App.css"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register"; // Import the Register component

function App() {
  const [showLogin, setShowLogin] = useState(false); // State to control login popup visibility

  const handleLoginClick = () => {
    setShowLogin(true); // Show login popup when button is clicked
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Close login popup
  };

  return (
    <Router>
      <div className="App">
        {/* Header section */}
        <header className="header">
          <div className="logo">
            <img
              src="https://th.bing.com/th/id/OIP.ztK_g-yAuVX9bcH142frogHaHa?rs=1&pid=ImgDetMain"
              alt="City of Tshwane Logo"
              className="logo-image"
            />
          </div>

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
            />
            <nav className="nav">
              <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Application">Application</Link></li>
                <li><Link to="/tips">Tips</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main section */}
        <main className="main-section">
          <div className="green-overlay"></div>
          <div className="overlay-content">
            <h1>Streamline Your Embedded Generator Application with EASE.</h1>
            <p>
              Our platform simplifies the process, ensuring fast approval and
              compliance with all regulatory requirements.
            </p>
            <div className="buttons">
              <Link to="/register">
                <button className="register-btn">Register</button>
              </Link>
              <button className="login-btn" onClick={handleLoginClick}>Log In</button>
            </div>
          </div>
        </main>

        {/* Background image */}
        <div className="background">
          <img
            src="https://th.bing.com/th/id/R.df6e609f261113adb815e8cf5258e757?rik=EAEoGQW0IT28%2bw&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f100000%2fvelka%2felectrical-power-lines.jpg&ehk=PEbBdwXRojJiJwafpPBvxMrrl%2fQ%2bE8kb%2b5Gju%2bb0b2k%3d&risl=&pid=ImgRaw&r=0"
            alt="Power grid"
            className="background-image"
          />
        </div>

        {/* Define Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Login Popup Modal */}
        {showLogin && (
          <div className="login-modal">
            <div className="login-content">
              <span className="close-btn" onClick={handleCloseLogin}>&times;</span>
              <h2>Login</h2>
              <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter email" required />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" required />
                <button type="submit">Log In</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
