"use client";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyProvider({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* ...pageProps => whole Project */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyProvider;
