import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import { authOperations, authSelectors } from "./redux/auth";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginView = lazy(() => {
  return import("./views/LoginView");
});

const Register = lazy(() => {
  return import("./views/RegisterView");
});

const Contacts = lazy(() => {
  return import("./components/Contacts");
});

const ContactView = lazy(() => {
  return import("./views/ContactView");
});

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    !isFetchingCurrentUser && (
      <>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/users/login"
                element={
                  <PublicRoute restricted isLoggedIn={isLoggedIn}>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="/users/signup"
                element={
                  <PublicRoute restricted isLoggedIn={isLoggedIn}>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="contacts/:id"
                element={
                  <PrivateRoute isLoggedIn={isLoggedIn}>
                    <ContactView />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <div>
                    <h2>Oops we have a problem</h2>
                    <h3>Pages not found</h3>
                  </div>
                }
              ></Route>
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
