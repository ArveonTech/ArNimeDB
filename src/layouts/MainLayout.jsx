
import NavButtom from "../components/molecules/navBottom/NavButtom";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-800 min-h-screen">
      {children}
      <NavButtom/>
    </div>
  );
};

export default Layout;
