// pages/blogpage.js

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BlogCategory from "./blogcategory";

const Blogpage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = (e) => {
    formik.setFieldValue("lastname", e.item.props.children);
    setDropdownVisible(false);
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values); // Handle form submission here
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="border w-[20%]">
        <div>
          <label className="text-red-400">First Name:</label>
          <input
            type="text"
            name="firstname"
            className="border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className="text-red-600">{formik.errors.firstname}</div>
          )}
        </div>

        <div>
          <label>Last Name:</label>

          <input
            type="text"
            name="lastname"
            className="border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
            onFocus={() => setDropdownVisible(true)}
          />

          {formik.touched.lastname && formik.errors.lastname && (
            <div className="text-red-600">{formik.errors.lastname}</div>
          )}
        </div>
        {/* <div>{dropdownVisible && <BlogCategory />} </div> */}
        {dropdownVisible && (
          <BlogCategory
            selectedCategory={formik.values.lastname}
            onSelectCategory={(category) =>
              formik.setFieldValue("lastname", category)
            }
            onClose={() => setDropdownVisible(false)}
          />
        )}

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            className="border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600">{formik.errors.password}</div>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="border"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-600">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <div>
          <button type="submit" className="border">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Blogpage;
