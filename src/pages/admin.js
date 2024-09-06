// import Footer from "./footer";
// import { useNavigate } from 'react-router-dom';


// import React, { useState, useEffect } from "react";

// const Admin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [admin, setItems] = useState([]);
//   const [editingItemId, setEditingItemId] = useState(null);
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();


//   // Fetch admin when the component mounts
//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/admin");
//         if (!response.ok) {
//           throw new Error("Failed to fetch admin");
//         }
//         const data = await response.json();
//         setItems(data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchItems();
//   }, []);

//   // Handle form submission to add or update an admin
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const method = editingItemId ? "PUT" : "POST";
//       const url = editingItemId
//         ? `http://localhost:5001/api/admin/${editingItemId}`
//         : "http://localhost:5001/api/admin";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         console.log("-----------------------------------")
//         navigate('/home');
//         setMessage(`Welcome back!`);
//         // Handle successful login, e.g., redirect or save token
//       }

//       if (!response.ok) {
//         throw new Error("Failed to save admin");
//       }
//     } catch (error) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div>
//       <div class="py-5 fixed-top">
//         <div class="container w-50 py-5 vh-100">
//           <form onSubmit={handleSubmit}>
//             <div class="form-group">
//               <label for="exampleInputEmail1">Email address</label>
//               <input
//                 type="email"
//                 class="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <small id="emailHelp" class="form-text text-muted"></small>
//             </div>
//             <div class="form-group">
//               <label for="exampleInputPassword1">Password</label>
//               <input
//                 type="text"
//                 class="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Password"
//                 value={password}
//                 name="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" class="btn btn-primary">
                
//               Submit

              
//             </button>

//             <h2>Item List</h2>
//       {admin.length === 0 ? (
//         <p>No items found.</p>
//       ) : (
//         <ul>
//           {admin.map(admin => (
//             <li key={admin._id}>
//               <strong>{admin.email}</strong>: {admin.password}
//             </li>
//           ))}
//         </ul>
//       )}
//           </form>
//         </div>
//         <div class="sticky-bottom">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Admin;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [admin, setItems] = useState([]);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5001/api/admin', {
//         email,
//         password,
//       });

//       console.log("===========================", response)

//       if (response.data.token) {
//         // Store the token in localStorage
//         localStorage.setItem('token', response.data.token);
//         setMessage('Login successful');

//         // Redirect to Dashboard
//         navigate('/dashboard');
//       } else {
//         // Redirect to Error page
//         navigate('/error');
//       }
//     } catch (error) {
//       setMessage('Invalid email or password');
//       // Redirect to Error page
//       navigate('/error');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>

//         <h2>Item List</h2>
//        {admin.length === 0 ? (
//          <p>No items found.</p>
//        ) : (
//          <ul>
//            {admin.map(admin => (
//              <li key={admin._id}>
//                <strong>{admin.email}</strong>: {admin.password}
//              </li>
//            ))}
//          </ul>
//        )}
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/admin/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful');

        // Redirect to Dashboard
        navigate('/dashboard');
      } else {
        setMessage('Login failed');
        navigate('/error');
      }
    } catch (error) {
      setMessage('Invalid email or password');
      navigate('/error');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
