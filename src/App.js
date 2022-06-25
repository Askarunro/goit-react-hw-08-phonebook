import "./App.css";

import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

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
  const token = useSelector((state) => state.token);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users/login" element={<LoginView />}></Route>
          <Route path="/users/signup" element={<Register />}></Route>
          {token && (
            <>
            <Route path="/contacts" element={<Contacts />}>
            </Route>
            <Route path="contacts/:id" element={<ContactView />} />
            </>
          )}
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
  );
}

export default App;
