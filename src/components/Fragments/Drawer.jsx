import IsLoginDrawer from "./DrawerAuth/IsLoginDrawer";
import IsNotLoginDrawer from "./DrawerAuth/IsNotLoginDrawer";

export default function Drawer({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  // const cart = JSON.parse(localStorage.getItem("@cart"));

  return (
    <div className="drawer ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu flex justify-between p-4 w-80 h-full bg-base-200 text-base-content space-y-5">
          <div>{user ? <IsLoginDrawer /> : <IsNotLoginDrawer />}</div>
        </ul>
      </div>
    </div>
  );
}
