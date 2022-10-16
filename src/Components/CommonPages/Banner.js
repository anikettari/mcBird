import React, { useState, useEffect } from "react";
import ban from "../AllImages/bnr.jpg";
import axios from "axios";
// import UserAgent from "user-agents";

// const { detect } = require("detect-browser");
// const browser = detect();

const Banner = () => {
  // const [ip, setIP] = useState("");
  // const [deviceType, setDeviceType] = useState("");
  // const [browserType, setBrowserType] = useState("");
  // const [userAgentt, setUserAgent] = useState("");

  // const url = "https://dev.api.klaim.yousted.org/api/visitor/store";

  // const token =
  //   "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28";

  // const getData = async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   console.log(res.data);
  //   setIP(res.data.IPv4);
  //   console.log("ip", ip);
  // };

  // const data = {
  //   ip_address: ip,
  //   device_type: deviceType,
  //   browser_type: browserType,
  //   user_agent: userAgentt,
  // };

  // useEffect(() => {
  //   getData();

  //   const userAgent = new UserAgent();
  //   console.log(userAgent.toString());
  //   setUserAgent(userAgent.toString());

  //   if (browser) {
  //     setBrowserType(browser.name);
  //     setDeviceType(browser.os);
  //   }

  //   axios
  //     .post(url, data, {
  //       headers: { Authorization: "Bearer " + token },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [ip]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 p-0">
            <img src={ban} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
