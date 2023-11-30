// import React, { createContext, useContext, useState } from 'react';
// import { myRoles } from './func/auth.ts';

// // Create the AuthContext
// const AuthContext = createContext();

// // Create the AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [Roles, setRoles] = useState([null]);
//   const TestAut = async () => {
//     console.log('Testing');
//     myRoles().then((response) => {
//       setRoles(response.data);
//     }).catch((error) => {setRoles(["unAuthorized"]);})
//   }

//   return (
//     <AuthContext.Provider value={{ Roles,TestAut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import  axios from "./app/config/clientaxaios"


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Roles, setRoles] = useState([null]);
  function HaveRole(RequiredRoles) {
    for (const value of Roles) {
      if (RequiredRoles.includes(value)) {
        return true; // Found a duplicate value
      }
    }
    return false; // No duplicate values found
  }
  useEffect(() => {

    const TestAut = async () => {
      try {
        console.log("auth Context")
        const response = await axios.get('/api/auth/myroles');
        console.log(response)
        setRoles(response.data);
      } catch (error) {
        setRoles(["UnAuthorized"]);
      }
    };
    TestAut(); 
  }, []); 

  return (
    <AuthContext.Provider value={{ Roles ,HaveRole ,setRoles}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
 