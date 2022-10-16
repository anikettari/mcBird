import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import "../src/Components/Css/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import FooterPage from "./Components/Pages/FooterPage";

import AddressDetails from "./Components/Pages/AddressDetails";
import MainPage from "./Components/Pages/MainPage";
import Banner from "./Components/CommonPages/Banner";
import Logo from "./Components/CommonPages/Logo";
import ContactDetails from "./Components/Pages/ContactDetails";
import PersonalDetails from "./Components/Pages/PersonalDetails";
import AddressFrom from "./Components/Pages/AddressFrom";
import Thankyou from "./Components/Pages/Thankyou";

function App() {
  console.log(window.location.pathname);

  return (
    <>
      <Logo />
      {window.location.pathname === "/address" ? <></> : <Banner />}
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/contact" element={<ContactDetails />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/addressFrom" element={<AddressFrom />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
