import { createContext, useReducer } from "react";
import { MobileAsideReducer } from "../reducers";
import PropTypes from "prop-types";
import { ACTION_TYPES } from "../reducers/postActionTypes";

export const AppHomeContext = createContext();

const initialState = {
  isLandingPageNavOpen: false,
};

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MobileAsideReducer, initialState);

  const toggleHomeAsideNav = (action) => {
    dispatch({ type: ACTION_TYPES.MOBILE_ASIDE_NAV, payload: action });
  };

  return (
    <AppHomeContext.Provider value={{ ...state, toggleHomeAsideNav }}>
      {children}
    </AppHomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.node,
};
