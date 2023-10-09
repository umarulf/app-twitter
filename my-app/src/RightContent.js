import React from 'react';

function RightContent() {
  return (
    <div className="right">
      <form className="right-content-form">
        <input type="text" className="user-info" placeholder="Phone, email, or username" />
        <div>
          <input type="password" className="password" placeholder="Password" />
          <label>Forgot Password?</label>
        </div>
        <button type="button" className="btn-top">Log in</button>
      </form>
      <div className="middle-content">
        <i className="fas fa-dove"></i>
        <h1>Explore what's happening in the world</h1>
        <h4>Join Twitter today</h4>
        <button type="button" className="sign-up">Sign Up</button>
        <button type="button" className="log-in">Log in</button>
      </div>
    </div>
  );
}

export default RightContent;