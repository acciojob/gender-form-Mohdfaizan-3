import { useState } from "react";
import React from "react";
import "./../styles/App.css";

const App = () => {
  const [gender, setGender] = useState("");
  const [shirtSize, setShirtSize] = useState("");
  const [dressSize, setDressSize] = useState("");

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    console.log(selectedGender);
    setGender(selectedGender);

    if (selectedGender === "male") {
      setShirtSize("");
      setDressSize("");
    } else if (selectedGender === "female") {
      setDressSize("");
      setShirtSize("");
    }
  };

  function handleShirtSizeChange(event) {
    setShirtSize(event.target.value);
  }

  function handleDressSizeChange(event) {
    setDressSize(event.target.value);
  }

  return (
    <div>
      <form>
        <fieldset>
          <h1>Select your gender</h1>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleGenderChange}
            />
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleGenderChange}
            />
            Female
          </label>
        </fieldset>

        {gender === "male" && (
          <div>
            <h2>Select your shirt size:</h2>
            <select
              name="shirt-size"
              id="shirt-size"
              value={shirtSize}
              onChange={handleShirtSizeChange}
            >
              <option value="">Select size</option>
              <option value="">--Select--</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
            </select>
          </div>
        )}

        {gender === "female" && (
          <div>
            <h2>Select your dress size:</h2>
            <select
              name="dress-size"
              id="dress-size"
              value={dressSize}
              onChange={handleDressSizeChange}
            >
              <option value="">Select size</option>
              <option value="">--Select--</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
