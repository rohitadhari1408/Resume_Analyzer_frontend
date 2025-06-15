import Sidebar from "./Sidebar";

const withSidebar = (Component, navItems) => {
  return (props) => {
    return (
      <div className="flex">
        <Sidebar navItems={navItems} {...props} />
        <div className="ml-16 md:ml-64 p-6 w-full">
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default withSidebar;
