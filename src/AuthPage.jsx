// import React, { useState } from 'react';
// import { Box, TextField, Button, Paper, Tabs, Tab, IconButton, Chip } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { useNavigate } from 'react-router-dom';

// export default function AuthPage() {
//   const navigate = useNavigate();
//   const [tabIndex, setTabIndex] = useState(0);

//   // --- Login states ---
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   // --- Sign-up states ---
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');
//   const [occupation, setOccupation] = useState('');
//   const [skillInput, setSkillInput] = useState('');
//   const [skills, setSkills] = useState([]);

//   const handleTabChange = (e, newValue) => setTabIndex(newValue);

//   // --- Login ---
//   const handleLogin = () => {
//     if (!loginEmail || !loginPassword) {
//       alert('Please enter email and password.');
//       return;
//     }
//     console.log('Login Data:', { loginEmail, loginPassword });
//     navigate('/Main');
//   };

//   // --- Sign-up ---
//   const handleAddSkill = () => {
//     if (skillInput.trim() && !skills.includes(skillInput.trim())) {
//       setSkills([...skills, skillInput.trim()]);
//       setSkillInput('');
//     }
//   };

//   const handleRemoveSkill = (skillToRemove) => {
//     setSkills(skills.filter((s) => s !== skillToRemove));
//   };

//   const handleSignUp = () => {
//     if (password !== confirmPassword) {
//       alert("Passwords don't match!");
//       return;
//     }
//     const userData = { name, email, username, password, phone, dob, occupation, skills };
//     console.log('Sign-Up Data:', userData);
//     alert("Sign-up successful!");
//     navigate('/Main');
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         px: 2,
//         background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
//       }}
//     >
//       <Paper
//         elevation={4}
//         sx={{
//           p: 4,
//           width: '100%',
//           maxWidth: 500,
//           borderRadius: 4,
//           backdropFilter: 'blur(6px)',
//           backgroundColor: 'rgba(255, 255, 255, 0.85)'
//         }}
//       >
//         <Tabs value={tabIndex} onChange={handleTabChange} centered>
//           <Tab label="Login" />
//           <Tab label="Sign Up" />
//         </Tabs>

//         {tabIndex === 0 && (
//           <Box sx={{ mt: 3 }}>
//             <TextField
//               label="Email ID"
//               type="email"
//               fullWidth
//               margin="normal"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               margin="normal"
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.target.value)}
//             />
//             <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }} onClick={handleLogin}>
//               Login
//             </Button>
//           </Box>
//         )}

//         {tabIndex === 1 && (
//           <Box sx={{ mt: 3 }}>
//             <TextField label="Full Name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
//             <TextField label="Email ID" type="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
//             <TextField label="Username" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
//             <TextField label="Confirm Password" type="password" fullWidth margin="normal" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//             <TextField label="Phone Number" type="tel" fullWidth margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />
//             <TextField label="Date of Birth" type="date" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={dob} onChange={(e) => setDob(e.target.value)} />
//             <TextField label="Occupation" fullWidth margin="normal" value={occupation} onChange={(e) => setOccupation(e.target.value)} />

//             <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
//               <TextField
//                 label="Add Skill"
//                 variant="outlined"
//                 fullWidth
//                 value={skillInput}
//                 onChange={(e) => setSkillInput(e.target.value)}
//                 onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSkill(); } }}
//               />
//               <IconButton color="primary" onClick={handleAddSkill}>
//                 <AddCircleIcon />
//               </IconButton>
//             </Box>

//             <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//               {skills.map((skill) => (
//                 <Chip key={skill} label={skill} onDelete={() => handleRemoveSkill(skill)} color="primary" />
//               ))}
//             </Box>

//             <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }} onClick={handleSignUp}>
//               Sign Up
//             </Button>
//           </Box>
//         )}
//       </Paper>
//     </Box>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   // --- Login state ---
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   // --- Sign-up state ---
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dob, setDob] = useState("");
//   const [occupation, setOccupation] = useState("");
//   const [skills, setSkills] = useState("");

//   const navigate = useNavigate();

//   // --- Helper functions ---
//   const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
//   const isValidPhone = (phone) => /^\d{10}$/.test(phone);
//   const isAdult = (dob) => {
//     if (!dob) return false;
//     const birth = new Date(dob);
//     const today = new Date();
//     let age = today.getFullYear() - birth.getFullYear();
//     const m = today.getMonth() - birth.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
//     return age >= 18;
//   };

//   // --- Handlers ---
//   const handleLogin = () => {
//     if (!loginEmail || !loginPassword) return alert("All fields are required");
//     if (!isValidEmail(loginEmail)) return alert("Invalid email format");
//     if (loginPassword.length < 6) return alert("Password must be at least 6 characters");
//     console.log("Login Data:", { loginEmail, loginPassword });
//     navigate("/Main"); // replace with your actual main page route
//   };

//   const handleSignUp = () => {
//     if (!name.trim()) return alert("Full Name required");
//     if (!/^[a-zA-Z\s]+$/.test(name)) return alert("Full Name must contain only letters");
//     if (!email || !isValidEmail(email)) return alert("Valid Email required");
//     if (!username || !/^[a-zA-Z0-9]{4,}$/.test(username)) return alert("Username min 4 chars, alphanumeric");
//     if (!password || password.length < 6) return alert("Password min 6 chars");
//     if (password !== confirmPassword) return alert("Passwords don't match");
//     if (!phone || !isValidPhone(phone)) return alert("Phone must be 10 digits");
//     if (!dob || !isAdult(dob)) return alert("You must be 18+");
//     // occupation & skills optional

//     const userData = { name, email, username, password, phone, dob, occupation, skills };
//     console.log("Sign-Up Data:", userData);
//     alert("Sign-up successful!");
//     navigate("/Main");
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//       {isLogin ? (
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             value={loginEmail}
//             onChange={(e) => setLoginEmail(e.target.value)}
//             style={{ display: "block", margin: "10px 0", width: "100%" }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={loginPassword}
//             onChange={(e) => setLoginPassword(e.target.value)}
//             style={{ display: "block", margin: "10px 0", width: "100%" }}
//           />
//           <button onClick={handleLogin} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
//             Login
//           </button>
//           <p style={{ marginTop: "10px" }}>
//             Don't have an account?{" "}
//             <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsLogin(false)}>
//               Sign Up
//             </span>
//           </p>
//         </div>
//       ) : (
//         <div>
//           <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="text" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <input type="text" placeholder="Skills (optional)" value={skills} onChange={(e) => setSkills(e.target.value)} style={{ display: "block", margin: "10px 0", width: "100%" }} />
//           <button onClick={handleSignUp} style={{ width: "100%", padding: "10px", marginTop: "10px" }}>
//             Sign Up
//           </button>
//           <p style={{ marginTop: "10px" }}>
//             Already have an account?{" "}
//             <span style={{ color: "blue", cursor: "pointer" }} onClick={() => setIsLogin(true)}>
//               Login
//             </span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthPage;




// ===========================================================

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
    name: (val) => (!val ? "Full Name is required" : /^[a-zA-Z\s]+$/.test(val) ? "" : "Full Name must contain only letters"),
    email: (val) => (!val ? "Email is required" : /\S+@\S+\.\S+/.test(val) ? "" : "Invalid email format"),
    username: (val) => (!val ? "Username is required" : /^[a-zA-Z0-9]{4,}$/.test(val) ? "" : "Username min 4 chars, alphanumeric"),
    password: (val) => (!val ? "Password is required" : val.length >= 6 ? "" : "Password min 6 chars"),
    confirmPassword: (val, form) => (!val ? "Confirm Password is required" : val === form.password ? "" : "Passwords do not match"),
    phone: (val) => (!val ? "Phone is required" : /^\d{10}$/.test(val) ? "" : "Phone must be 10 digits"),
    dob: (val) => {
      if (!val) return "Date of Birth required";
      const birth = new Date(val);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
      return age >= 18 ? "" : "You must be 18+";
    },
  };

  // --- Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    if (validators[name]) {
      setErrors((prev) => ({ ...prev, [name]: validators[name](value, { ...form, [name]: value }) }));
    }
  };

  const handleSignUp = (e) => {
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
    else if (!/\S+@\S+\.\S+/.test(loginEmail)) loginErrs.email = "Invalid email format";

    if (!loginPassword) loginErrs.password = "Password required";
    else if (loginPassword.length < 6) loginErrs.password = "Password min 6 chars";

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
  const switchStyle = { color: "#007bff", cursor: "pointer", textDecoration: "underline" };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" ,color:"black"}}>{isLogin ? "Login" : "Sign Up"}</h2>
      {isLogin ? (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            style={inputStyle(loginErrors.email)}
          />
          {loginErrors.email && <div style={errorStyle}>{loginErrors.email}</div>}

          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={inputStyle(loginErrors.password)}
          />
          {loginErrors.password && <div style={errorStyle}>{loginErrors.password}</div>}

          <button type="submit" style={buttonStyle}>
            Login
          </button>
          <p style={{ marginTop: "15px", textAlign: "center" ,color:"black"}}>
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

          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInputChange} style={inputStyle(errors.email)} />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}

          <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleInputChange} style={inputStyle(errors.username)} />
          {errors.username && <div style={errorStyle}>{errors.username}</div>}

          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleInputChange} style={inputStyle(errors.password)} />
          {errors.password && <div style={errorStyle}>{errors.password}</div>}

          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleInputChange} style={inputStyle(errors.confirmPassword)} />
          {errors.confirmPassword && <div style={errorStyle}>{errors.confirmPassword}</div>}

          <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleInputChange} style={inputStyle(errors.phone)} />
          {errors.phone && <div style={errorStyle}>{errors.phone}</div>}

          <input type="date" name="dob" placeholder="Date of Birth" value={form.dob} onChange={handleInputChange} style={inputStyle(errors.dob)} />
          {errors.dob && <div style={errorStyle}>{errors.dob}</div>}

          <input type="text" name="occupation" placeholder="Occupation" value={form.occupation} onChange={handleInputChange} style={inputStyle(false)} />
          <input type="text" name="skills" placeholder="Skills (optional)" value={form.skills} onChange={handleInputChange} style={inputStyle(false)} />

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
          <p style={{ marginTop: "15px", textAlign: "center", color:"black" }}>
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
