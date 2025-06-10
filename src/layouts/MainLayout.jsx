import NavTop from "../components/templates/navTop/NavTop";
import NavButtom from "../components/templates/navBottom/NavButtom";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-800">
      <NavTop />
      {children}
      <NavButtom />
    </div>
  );
};

export default Layout;
