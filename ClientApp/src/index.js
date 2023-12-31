import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import decode from "jwt-decode";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { userLoggedIn } from "./actions/auth";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";
import 'typeface-roboto';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.bookwormJWT) {
  const payload = decode(localStorage.bookwormJWT);
  const user = {
    token: localStorage.bookwormJWT,
    email: payload.email,
    confirmed: payload.confirmed
  };
  setAuthorizationHeader(localStorage.bookwormJWT);
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="loading...">
        <I18nextProvider i18n={i18n}>
          <Route component={App} />
        </I18nextProvider>
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
