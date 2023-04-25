import { useContext, useReducer, createContext } from "react";
import reducer from "./reducers";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertText: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  cafeLocation: "",
  showSidebar: false,
  cafes: [],
  totalCafes: 0,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: "DISPLAY_ALERT" });
    clearAlert();
  };
  const addToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    // or just remove specific items..?
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 2000);
  };

  const toggleSmallSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  // TO-DO make one function to both register and login users
  const registerUser = async (currentUser) => {
    dispatch({ type: "REGISTER_USER_BEGIN" });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = response.data;
      dispatch({
        type: "REGISTER_USER_SUCCESS",
        payload: {
          user,
          token,
        },
      });
      addToLocalStorage(response.data);
      // clearLocalStorage()
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: "LOGIN_USER_BEGIN" });
    try {
      const response = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = response.data;
      dispatch({
        type: "LOGIN_USER_SUCCESS",
        payload: {
          user,
          token,
        },
      });
      addToLocalStorage(response.data);
    } catch (error) {
      dispatch({
        type: "LOGIN_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const updateUser = async (currentUser) => {
    try {
      const res = await axios.patch("/api/v1/auth/update", currentUser, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      console.log(res);
      dispatch({ type: "UPDATE_USER_SUCCESS" });
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: "LOGOUT_USER" });
    clearLocalStorage();
  };

  // will use this instead of regular axios instance when we want to be able to access the req.headers.authorization for verification (and maybe for other purposes too. we'll see)
  const authReq = axios.create({
    baseURL: "/api/v1",
  });
  // intercepts any requests that are using the authReq
  // sets up the req.headers.authorization to be the string literal below
  authReq.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const addCafe = async (cafeInfo) => {
    try {
      await authReq.post("/cafes", cafeInfo);
      dispatch({ type: "ADD_CAFE" });
    } catch (err) {
      console.log(err);
    }
    clearAlert();
  };

  const getAllCafes = async () => {
    let url = `/cafes`;
    dispatch({ type: "GET_CAFES_BEGIN" });
    try {
      const { data } = await authReq.get(url);
      const { cafes, totalCafes } = data;
      console.log(cafes);
      dispatch({
        type: "GET_CAFES_SUCCESS",
        payload: {
          cafes,
          totalCafes,
        },
      });
    } catch (err) {
      console.log(err);
      logoutUser();
    }
  };

  //  for testing:
  //   useEffect(() => {
  //     getAllCafes();
  //   }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        updateUser,
        addToLocalStorage,
        clearLocalStorage,
        loginUser,
        logoutUser,
        toggleSmallSidebar,
        addCafe,
        getAllCafes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
