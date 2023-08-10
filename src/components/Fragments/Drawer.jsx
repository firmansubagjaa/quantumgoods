import { Link } from "react-router-dom";

export default function Drawer({ children }) {
  return (
    <div className="drawer ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link>Sidebar Item 1</Link>
          </li>
          <li>
            <Link>Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
