import { Outlet } from "react-router-dom";
import { AdminHeaders } from "./CommonStyled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <AdminHeaders>
        <h2>Users</h2>
      </AdminHeaders>
      <Outlet />
      {status === "pending" ? (
        <p>Loading...</p>
      ) : (
        users &&
        users.map((user) => (
          <div key={user._id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button>Remove</button>
          </div>
        ))
      )}
    </>
  );
};
export default Users;
