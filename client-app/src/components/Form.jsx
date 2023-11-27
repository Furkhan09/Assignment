// src/components/Form.js
import { useState } from "react";
import PropTypes from "prop-types";
//import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Validate email on change
    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? "" : "Please enter a valid email address",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { companyName, contactNumber, email } = formData;
    await fetch("http://localhost:5000/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, email, contactNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        alert("We will get back to you soon!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setFormData({
      companyName: "",
      contactNumber: "",
      email: "",
    });
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8"
    >
      <div className="mb-4">
        <label
          htmlFor="CompanyName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Organisation Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Contact Number
        </label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 ${
            errors.email ? "border-red-500" : ""
          }`}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="text-center pb-4">
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
