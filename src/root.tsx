import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

interface ReduxRoot {
  children?: ReactNode;
  initialState?: Object;
}

const root: FC<ReduxRoot> = (props: ReduxRoot) => {
  const { initialState = {}, children } = props;
  const store = createStore(reducers, initialState);

  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};

export default root;
