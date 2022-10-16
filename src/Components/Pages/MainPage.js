import React from "react";
import "../Css/custom.scss";
import Logo from "../CommonPages/Logo";
import Banner from "../CommonPages/Banner";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import FooterPage from "./FooterPage";

const MainPage = () => {
  return (
    <div>
      <section className="bnrsection">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>
            <PersonalDetails />
            <ContactDetails />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
