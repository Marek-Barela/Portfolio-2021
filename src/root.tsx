import React from "react";
import { ReactNode } from "react-dom/node_modules/@types/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

interface ReduxRoot {
  children: ReactNode;
  initialState?: Object;
}

const root = ({ children, initialState = {} }: ReduxRoot) => {
  const store = createStore(reducers, initialState);

  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};

export default root;
