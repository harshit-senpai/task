import Overview from "./Overview";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Overview />
      <Sidebar/>
    </div>
  );
};

export default MainLayout;
