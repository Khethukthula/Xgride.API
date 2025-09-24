import React, { useState } from "react";
import "./Register.css"; // Assuming you have a separate CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    title: '',
    name: '',
    surname: '',
    initials: '',
    email: '',
    contact: '',
    idNumber: '',
    meterNumber: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation or handling logic here
    console.log(formData);
  };

  return (
    <main className="form-section">
      <h2 className="form-title">Register</h2>

      <form className="register-form" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username <span>*</span></label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Title and Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title <span>*</span></label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name <span>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Initials and Surname */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="initials">Initials <span>*</span></label>
            <input
              type="text"
              id="initials"
              name="initials"
              value={formData.initials}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname <span>*</span></label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Email and Contact Number */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact No.</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* ID Number and Meter Number */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="idNumber">ID Number <span>*</span></label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="meterNumber">Meter Number <span>*</span></label>
            <input
              type="text"
              id="meterNumber"
              name="meterNumber"
              value={formData.meterNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Password and Confirm Password */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password <span>*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="form-group terms">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            By checking this box you are agreeing to our use of{" "}
            <a href="#">Terms and Conditions</a>.
          </label>
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="form-buttons">
          <button type="submit" className="accept-btn">Accept</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
