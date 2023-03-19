import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AdminHeaders } from "./CommonStyled";

const Summary = () => {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);

  const totalProducts = products.items.length;
  const totalUsers = users.users.length;

  return (
    <>
      <AdminHeaders>
        <h2 style={{ marginBottom: "10rem" }}>Products</h2>
      </AdminHeaders>

      <Outlet />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <AdminHeaders>
            <h2>Total Products</h2>
          </AdminHeaders>
          <h3 style={{ textAlign: "center" }}>{totalProducts}</h3>
        </div>

        <div>
          <AdminHeaders>
            <h2>Total Users</h2>
          </AdminHeaders>
          <h3 style={{ textAlign: "center" }}>{totalUsers}</h3>
        </div>
        <div>
          <AdminHeaders>
            <h2>Total Orders</h2>
          </AdminHeaders>
          <h3 style={{ textAlign: "center" }}>0</h3>
        </div>
      </div>
    </>
  );
};
export default Summary;
