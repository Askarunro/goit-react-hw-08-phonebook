import "./App.css";


import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";

import { useSelector  } from "react-redux";


// import Layout from "./components/Layout";
// import LoginView from "./views/LoginView";


// import ContactForm from "./components/ContactForm";
// import Filter from "./components/Filter";
// import ContactList from "./components/ContactList";
// import { useGetContactsQuery } from "./redux/api/contactsApi"

const LoginView = lazy(() => {
  return import("./views/LoginView");
});

  const Register = lazy(() => {
    return import("./views/RegisterView");
  });

  const UserMenu = lazy(() => {
    return import("./components/UserMenu");
  });

  const Contacts = lazy(() => {
    return import("./components/Contacts");
  });

  const ContactView = lazy(() => {
    return import("./views/ContactView");
  });
  // const ContactList = lazy(() => {
  //   return import("./components/ContactList");
  // });
  // const Filter = lazy(() => {
  //   return import("./components/Filter");
  // });
  const ContactForm = lazy(() => {
    return import("./components/ContactForm");
  });
function App() {

  const token = useSelector((state) => state.token);


  // const MoviesPage = lazy(() => {
  //   return import("./components/MoviesPage");
  // });
  
  // const Reviews = lazy(() => {
  //   return import("./components/Reviews");
  // });
  // const Cast = lazy(() => {
  //   return import("./components/Cast");
  // });





  // const {data: contacts} = useGetContactsQuery();

  return (

    <Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/users/login" element={<LoginView />}></Route>
        <Route path="/users/signup" element={<Register />}></Route>
        <Route path="/users/current" element={<UserMenu />}></Route>
        <Route path="/contacts" element={<Contacts />}>
          <Route path="id" element={<ContactView />}>
          {/* <Route index element={<ContactForm />}/> */}
          </Route>
          {/* <Route path="" element={<ContactForm />}></Route>
          <Route path="" element={<Filter />}></Route>
          <Route path="" element={<ContactList />}></Route> */}
        </Route>

        {/* <Route path="/movies" element={<MoviesPage />}></Route>
        <Route  path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='*' element={<div><h2>Oops we have a problem</h2><h3>Pages not found</h3></div>}></Route> */}
      <Route path='*' element={<div><h2>Oops we have a problem</h2><h3>Pages not found</h3></div>}></Route>
      
      </Route>

    </Routes>
  </Suspense>
    // <div>
    //   <LoginView/>
    //   {/* <h1>Phonebook</h1>
    //   <ContactForm />

    //   {contacts && (
    //     <>
    //       <h2>Contacts</h2>
    //       <Filter/>
    //       <ContactList />
    //     </>
    //   )} */}
    // </div>
  );
}

export default App;
