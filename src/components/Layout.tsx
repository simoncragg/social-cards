import { Outlet } from "react-router-dom";

const Layout = () => {
  return (

      <header>
        <h1 className="text-2xl text-sky-900">
           Echo Chamber 
        </h1>
      </header>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;