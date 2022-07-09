import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import PrivateRoute from './components/PrivateRoute'

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
  const shouldRedirect = true;
  const token = useSelector((state) => state.token);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users/login" element={token ? <Navigate replace to="/contacts" /> : <LoginView />} />
          <Route path="/users/signup" element={token ? <Navigate replace to="/contacts" /> : <Register />} />
          <Route path="/contacts" element={<PrivateRoute token={token}><Contacts/></PrivateRoute>}/>
          <Route path="contacts/:id" element={token === "" ? <Navigate replace to="/" /> : <ContactView />} /> 
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





// function App() {
// const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);


// // const dispatch = useDispatch();
// //   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
// // console.log(isFetchingCurrentUser)
// // useEffect(() => {
// //   dispatch(authOperations.fetchCurrentUser());
// // }, [dispatch]);

// return (
//   <Suspense fallback={<div>Loading</div>}>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path="/users/login" element={isLoggedIn ? <Navigate replace to="/contacts" /> : <LoginView />} />
//         <Route path="/users/signup" element={isLoggedIn ? <Navigate replace to="/contacts" /> : <Register />} />
//         <Route path="/contacts" element={<PrivateRoute token={isLoggedIn}><Contacts/></PrivateRoute>}/>
//         {/* <Route path="/contacts" element={token === "" ? <Navigate replace to="/" /> : <Contacts />} />*/}
//         <Route path="contacts/:id" element={isLoggedIn ? <Navigate replace to="/" /> : <ContactView />} /> 
//         <Route
//           path="*"
//           element={
//             <div>
//               <h2>Oops we have a problem</h2>
//               <h3>Pages not found</h3>
//             </div>
//           }
//         ></Route>
//       </Route>
//     </Routes>
//   </Suspense>
// );
// }

// export default App;