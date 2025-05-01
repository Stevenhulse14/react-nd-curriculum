"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function ReduxProvider({ children }) {
  //console.log(store);
  return (
    <Provider store={store}>
      {/* ...pageProps => whole Project */}
      {children}
    </Provider>
  );
}

export default ReduxProvider;
