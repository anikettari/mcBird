import React from "react";
import useForm from "../FormValidation/useForm";
import validate from "../FormValidation/FormValidationRules";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const ContactDetails = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  const location = useLocation();

  function login() {
    console.log("No errors, submit callback called!");
  }

  const data = {
    first_name: location.state.allValues.firstName,
    last_name: location.state.allValues.lastName,
    telephone: values.phone,
    email: values.email,
    visitor_id: location.state.visitorId,
    dob: "2022-01-01",
  };

  const url = "https://dev.api.klaim.yousted.org/api/user/store";
  const token =
    "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28			";

  const onSubmit = () => {
    axios
      .post(url, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {" "}
      <section className="bnrsection">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
              <div className="formpart">
                <form onSubmit={handleSubmit} noValidate>
                  <div id="slide02">
                    <h3>Enter Your Contact Details</h3>
                    <div className="mb-3 text-start">
                      <label for="FormControlInput4" className="form-label">
                        Email Address
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        // className="form-control"
                        id="FormControlInput4"
                        placeholder="Email Address"
                        className={`form-control input ${
                          errors.email && "is-danger"
                        }`}
                        onChange={handleChange}
                        value={values.email || ""}
                      />
                      {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-3 text-start">
                      <label for="FormControlInput5" className="form-label">
                        Phone Number
                      </label>
                      <input
                        required
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        className={`form-control input ${
                          errors.phone && "is-danger"
                        }`}
                        onChange={handleChange}
                        value={values.phone || ""}
                      />
                      {errors.phone && (
                        <p className="help is-danger">{errors.phone}</p>
                      )}
                    </div>
                    <div className="mb-3 text-center">
                      {!values.email || !values.phone ? (
                        <button
                          type="submit"
                          className="btn btn-success"
                          id="submit_claim"
                        >
                          submit
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-success"
                          id="submit_claim"
                          onClick={onSubmit}
                        >
                          <Link
                            to={{
                              pathname: "/address",
                              state: { testvalue: "hello" },
                            }}
                          >
                            Submit
                          </Link>
                        </button>
                      )}
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

export default ContactDetails;
