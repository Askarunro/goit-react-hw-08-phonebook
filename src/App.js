import "./App.css";


// import { Routes, Route, Navigate } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import Layout from "./components/Layout";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { useGetContactsQuery } from "./redux/api/contactsApi"


function App() {

//   const LoginView = lazy(() => {
//     return import("./views/LoginView");
//   });
//   const MovieDetailsPage = lazy(() => {
//     return import("./components/MovieDetailsPage");
//   });
//   const MoviesPage = lazy(() => {
//     return import("./components/MoviesPage");
//   });
  
//   const Reviews = lazy(() => {
//     return import("./components/Reviews");
//   });
//   const Cast = lazy(() => {
//     return import("./components/Cast");
//   });


//   <Suspense fallback={<div>Loading</div>}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<LoginView />}></Route>
//           <Route path="/movies" element={<MoviesPage />}></Route>
//           <Route  path="movies/:movieId" element={<MovieDetailsPage />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//           {/* <Route path='*' element={<Navigate to='/'/>}></Route> */}
//           <Route path='*' element={<div><h2>Oops we have a problem</h2><h3>Pages not found</h3></div>}></Route>
//         </Route>
//       </Routes>
//     </Suspense>


  const {data: contacts} = useGetContactsQuery();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts && (
        <>
          <h2>Contacts</h2>
          <Filter/>
          <ContactList />
        </>
      )}
    </div>
  );
}

export default App;
