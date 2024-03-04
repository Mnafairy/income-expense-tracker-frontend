import Link from "next/link";
import { GeldIcon } from "./icons/icon";
export const Header = () => {
  return (
    <div className="w-[1440px] m-auto px-[120px] py-4">
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-6">
          <GeldIcon width="27.8" height="27.4" />
          <Link href={"/dashboard"}>
            <div className="btn btn-ghost text-xl">Dashboard</div>
          </Link>
          <Link href={"/record"}>
            <div className="btn btn-ghost text-xl">Record</div>
          </Link>
        </div>
        <div className="flex-none gap-2 w-[180px] justify-between">
          <button class="flex items-center justify-center text-white w-[100px] rounded-[20px] h-8 bg-primary">
            + Record
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
