import { AuthAction } from "./auth-slice";

export const RegisterUser = (email, password) => {
  return async (dispatch) => {
    const url = `https://authentication-f405e-default-rtdb.firebaseio.com/register.json`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const register = await fetchData();
      if (register.name) {
        localStorage.setItem("user", register.name);
        dispatch(AuthAction.isAuthenticateUser(true));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const AuthenticateUser = (username, password) => {
  return async (dispatch) => {
    const url = `https://authentication-f405e-default-rtdb.firebaseio.com/register.json`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const register = await fetchData();
      const isAuthcated = verifyUser(register, username, password);
      dispatch(AuthAction.isAuthenticateUser(isAuthcated.isLogin));
      localStorage.setItem("user", isAuthcated.user);
    } catch (error) {
      console.log(error);
    }
  };
};

const verifyUser = (register, email, password) => {
  for (const userDetails in register) {
    if (
      email === register[userDetails].email &&
      password === register[userDetails].password
    ) {
      return { isLogin: true, user: userDetails };
    }
  }
  return { isLogin: false, user: null };
};
