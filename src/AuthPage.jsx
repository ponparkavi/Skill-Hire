import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // --- Login state ---
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({});

  // --- Sign-up state ---
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    occupation: "",
    skills: "",
  });

  const [errors, setErrors] = useState({});

  // --- Validation helpers ---
  const validators = {
    name: (val) =>
      !val
        ? "Full Name is required"
        : /^[a-zA-Z\s]+$/.test(val)
        ? ""
        : "Full Name must contain only letters",
    email: (val) =>
      !val
        ? "Email is required"
        : /\S+@\S+\.\S+/.test(val)
        ? ""
        : "Invalid email format",
    // username: (val) =>
    //   !val
    //     ? "Username is required"
    //     : /^[a-zA-Z0-9]{4,}$/.test(val)
    //     ? ""
    //     : "Username min 4 chars, alphanumeric",
    password: (val) =>
      !val
        ? "Password is required"
        : val.length >= 6
        ? ""
        : "Password min 6 chars",
    confirmPassword: (val, form) =>
      !val
        ? "Confirm Password is required"
        : val === form.password
        ? ""
        : "Passwords do not match",
    phone: (val) =>
      !val
        ? "Phone is required"
        : /^\d{10}$/.test(val)
        ? ""
        : "Phone must be 10 digits",
    dob: (val) => {
      if (!val) return "Date of Birth required";
      const birth = new Date(val);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
    },
  };

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    if (validators[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validators[name](value, { ...form, [name]: value }),
      }));
    }
  };

  const handleSignUp = (e) => {
    debugger;
    e.preventDefault();
    let newErrors = {};
    Object.keys(validators).forEach((key) => {
      const error = validators[key](form[key], form);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Sign-Up Data:", form);
      navigate("/Main");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let loginErrs = {};
    if (!loginEmail) loginErrs.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(loginEmail))
      loginErrs.email = "Invalid email format";

    if (!loginPassword) loginErrs.password = "Password required";
    else if (loginPassword.length < 6)
      loginErrs.password = "Password min 6 chars";

    setLoginErrors(loginErrs);

    if (Object.keys(loginErrs).length === 0) {
      console.log("Login Data:", { loginEmail, loginPassword });
      navigate("/Main");
    }
  };

  // --- Styles ---
  const containerStyle = {
    maxWidth: "450px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };
  const inputStyle = (err) => ({
    width: "100%",
    padding: "12px",
    margin: "6px 0",
    borderRadius: "6px",
    border: `1px solid ${err ? "red" : "#ccc"}`,
    outline: "none",
    fontSize: "14px",
  });
  const errorStyle = { color: "red", fontSize: "12px", marginBottom: "6px" };
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  };
  const switchStyle = {
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "black" }}>
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            style={inputStyle(loginErrors.email)}
          />
          {loginErrors.email && (
            <div style={errorStyle}>{loginErrors.email}</div>
          )}

          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={inputStyle(loginErrors.password)}
          />
          {loginErrors.password && (
            <div style={errorStyle}>{loginErrors.password}</div>
          )}

          <button type="submit" style={buttonStyle}>
            Login
          </button>
          <p style={{ marginTop: "15px", textAlign: "center", color: "black" }}>
            Don't have an account?{" "}
            <span style={switchStyle} onClick={() => setIsLogin(false)}>
              Sign Up
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleSignUp}>
          {/* <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleInputChange} style={inputStyle(errors.name)} />
          {errors.name && <div style={errorStyle}>{errors.name}</div>} */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleInputChange}
            style={inputStyle(errors.email)}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleInputChange}
            style={inputStyle(errors.name)}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleInputChange}
            style={inputStyle(errors.password)}
          />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleInputChange}
            style={inputStyle(errors.confirmPassword)}
          />
          {errors.confirmPassword && (
            <div style={errorStyle}>{errors.confirmPassword}</div>
          )}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleInputChange}
            style={inputStyle(errors.phone)}
          />
          {errors.phone && <div style={errorStyle}>{errors.phone}</div>}

          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleInputChange}
            style={inputStyle(errors.dob)}
          />
          {errors.dob && <div style={errorStyle}>{errors.dob}</div>}

          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={form.occupation}
            onChange={handleInputChange}
            style={inputStyle(false)}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills (optional)"
            value={form.skills}
            onChange={handleInputChange}
            style={inputStyle(false)}
          />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
          <p style={{ marginTop: "15px", textAlign: "center", color: "black" }}>
            Already have an account?{" "}
            <span style={switchStyle} onClick={() => setIsLogin(true)}>
              Login
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
