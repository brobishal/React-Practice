import React from "react";
import './Singin.css';
const Singin = () => {
  return (
    <>
      <h1>Hello</h1>
      <div className="main-container">
        <div className="main-form">
          <form method="POST">
            Name : <input type="text" name="uname" placeholder="username" />
            <br />
            Email : <input type="email" name="email" placeholder="email" />
            <br />
            Password : <input type="password" name="password" placeholder="password" />
            <br />
            Confirm password :<input type="cpassword" name="cpassword" placeholder="confirm password" />
            <br />
            <input type="submit" name="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Singin;
