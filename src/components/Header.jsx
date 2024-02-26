export const Header = () => {
  return (
    <div className="py-4">
      <div className="navbar bg-base-100">
        <div className="flex-1 gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={29}
            height={28}
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M18.8296 9.36772V0.300781H9.56514V9.36772H0.300659V18.6322H9.56514V27.6991H18.8296V18.6322H28.0941V9.36772H18.8296ZM18.8296 18.4347H9.56514V9.56665H18.8296V18.4347Z"
              fill="#0166FF"
            />
          </svg>
          <a className="btn btn-ghost text-xl">Dashboard</a>
          <a className="btn btn-ghost text-xl">Record</a>
        </div>
        <div className="flex-none gap-2 w-[180px] justify-between">
          <button class="flex items-center justify-center text-white w-[100px] rounded-[20px] h-8  bg-primary">
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
