import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AddressDetails = () => {
  return (
    <div>
      <section class="bnrsection">
        <div class="container">
          <div class="row">
            <div class="offset-lg-1 col-lg-10 col-md-12 col-12 text-center">
              <h1>
                Hi
                {/* <span>{First Name}</span> */}
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
            <div class="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
              <div class="formpart">
                <form action="">
                  <div id="slide03">
                    <h3>Do you have a Previous Address?</h3>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      />
                      <label
                        class="form-check-label next02"
                        for="flexRadioDefault1"
                      >
                        <Link to="/addressFrom">Yes</Link>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                      />
                      <label
                        class="form-check-label tothank"
                        for="flexRadioDefault2"
                      >
                        <Link to="/thankyou">No</Link>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressDetails;
