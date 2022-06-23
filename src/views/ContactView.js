import { useState, useEffect } from 'react';
import { useLoginUserMutation } from "..//redux/api/usersApi"
import { useDispatch } from "react-redux";
import { myToken } from "..//redux/reduce/filter";
import ContactForm from "../components/ContactForm";
import { useDeleteContactMutation, useUpdateMaterialMutation } from "..//redux/api/contactsApi"
import { NavLink, Outlet, Link, useNavigate  } from "react-router-dom";


export default function ContactView() {
    const [deleteContact] = useDeleteContactMutation();
    const { data: contacts }  = useUpdateMaterialMutation();

  return (
    <div>
     <ContactForm/>
             <button type="button" 
            onClick={()=>deleteContact()} >
              Delete
            </button>
            <Outlet/>
    </div>
  );
}