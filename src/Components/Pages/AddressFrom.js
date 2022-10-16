import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  return (
    <div>
      <div class="mb-3 text-start">
        <label for="" class="form-label">
          Previous Address 1
        </label>
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Address line 1"
        />
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Address line 2"
        />
        <input
          type="text"
          class="form-control mb-3"
          placeholder="Address line 3"
        />
      </div>

      <div class="mb-3 text-center">
        <button type="button" class="btn btn-success tothank">
          Submit
        </button>
      </div>
    </div>
  );
};

const AddressFrom = () => {
  let navigate = useNavigate();
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Input key={inputList.length} />));
  };

  const removeElement = () => {
    setInputList(() => !(<Input key={inputList.length} />));
  };

  const goBackk = () => {
    navigate(-1);
  };
  return (
    <div>
      {" "}
      <section class="bnrsection">
        <div class="container">
          <div class="row">
            <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 col-12 text-center">
              <div className="formpart">
                <div>
                  <h3>Enter your Previous Address</h3>
                  <div class="mb-3 text-start">
                    <label class="form-label">Previous Address 1</label>
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Address line 1"
                    />
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Address line 2"
                    />
                    <input
                      type="text"
                      class="form-control mb-3"
                      placeholder="Address line 3"
                    />
                  </div>

                  <div class="mb-3 text-center">
                    <button type="button" class="btn btn-success tothank">
                      Submit
                    </button>
                    <p>
                      {inputList.length > 1 ? (
                        <></>
                      ) : (
                        <div>
                          {" "}
                          <a onClick={onAddBtnClick}>Add Another Address</a>
                        </div>
                      )}
                      {inputList}
                    </p>
                    <p>
                      <a onClick={removeElement}>Remove Address</a>
                      <br></br>
                      <a onClick={goBackk}> Back</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressFrom;
