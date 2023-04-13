import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const changeHandler = (event) => {
    
      setData({ ...data, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

      setTouched({
        email: true,
        password: true,
      });
    
  };

  return (
    <div className={styles.container}>

      <form onSubmit={submitHandler} className={styles.formContainer}>
        
        <h2 className={styles.header}>Login</h2>
        
        <div className={styles.formField}>
          <label>Email:</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label>Password:</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <Link to="/profile/signup">Sign Up</Link>
          {/* <a href="#/">Sign Up</a> */}
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
