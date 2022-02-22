import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    //console.log(token);
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  // const login = () => {
  //   sleep(2000).then(() => {
  //     sessionStorage.setItem(
  //       "token",
  //       "fake_token_asdasdasdassss2ed12312i3y8n12s3y123sy81sm12"
  //     );
  //     setLoggedIn(true);
  //   });
  // };

  // const logout = () => {
  //   sleep(2000).then(() => {
  //     sessionStorage.removeItem("token");
  //     setLoggedIn(false);
  //   });
  // };

  // const authContextValue = {
  //   login,
  //   loggedIn,
  //   logout,
  // };

  const authContextValue = {
    loggedIn,
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };

// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------

// const apiCache = new Map();
// export function getApiCache(key) {
//   const data = apiCache.get(key);

//   if (data) {
//     console.log("Token from ApiCache: ", data);
//     return Promise.resolve(data);
//   }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = {
//         token:
//           "fake_token_3123k2h31jk23hk12jh3ksjh123k12h3kha1k2js3hk12jhs312k3h1k2js3h12kj3hs12ks3h12ks3jh12k3j1h2k3j1hk12hsjkhkj123h123",
//       };
//       apiCache.set(key, result);
//       resolve(result);
//     }, 2000);
//   });
// }
