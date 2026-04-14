"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkStyle = (path) => {
    return pathname === path
      ? "flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-md transition-all"  
      : "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-base-200 transition-all text-gray-600"; 
  };

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200 px-4 md:px-10 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          KeenKeeper
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-none">
        <ul className="flex items-center gap-2 md:gap-4">
          <li>
            <Link href="/" className={getLinkStyle("/")}>
              <RiHome2Line size={20} />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/timeline" className={getLinkStyle("/timeline")}>
              <RiTimeLine size={20} />
              <span className="hidden sm:inline">Timeline</span>
            </Link>
          </li>
          <li>
            <Link href="/stats" className={getLinkStyle("/stats")}>
              <TfiStatsUp size={18} />
              <span className="hidden sm:inline">Stats</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
