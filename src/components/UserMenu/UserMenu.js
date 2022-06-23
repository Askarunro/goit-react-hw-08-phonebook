// import l from "./UserMenu.module.css";

import { searchContact } from "..//../redux/reduce/filter";
import { useGetUsersQuery, useLogoutUserMutation } from "..//../redux/api/usersApi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function UserMenu() {
  const [logoutUser] = useLogoutUserMutation();

  const { data: user } = useGetUsersQuery();

  // const token = useSelector((state) => state.token);

  const logoutClick = async () => {
    const res = await logoutUser();
    try {
    } catch {}
  };

  const handleClick = (e) => {
    logoutClick();
    localStorage.setItem("token", JSON.stringify(""));
  };
  return (
    <div>
      <img src=""/>
      {user && <h3>{user.email}</h3>}
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
