import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  signOut: () => void;
  changeUserName: (name: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const changeUserName = (name: string) => {
    dispatch({type: 'changeUserName', payload: name})
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        signOut,
        changeUserName
      }}>
      {children}
    </AuthContext.Provider>
  );
};
