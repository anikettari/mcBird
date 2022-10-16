import React from "react";
import logo from "../AllImages/logo.png";

const Logo = () => {
  return (
    <div>
      {" "}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Logo;
