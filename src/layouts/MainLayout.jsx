import NavTop from "../components/templates/navTop/NavTop";
import NavButtom from "../components/templates/navBottom/NavButtom";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavTop />
      {children}
      <NavButtom />
    </div>
  );
};

export default Layout;
