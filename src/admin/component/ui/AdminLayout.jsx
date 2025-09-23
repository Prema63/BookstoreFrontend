import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { HiMiniHome } from "react-icons/hi2";
import { GiSpellBook } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa"; // Added missing import

export default function AdminLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveDrop(pathname);
    setIsNavOpen(false);
  }, [pathname]);

  // Close nav when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isNavOpen && !event.target.closest('aside') && !event.target.closest('button[type="button"]')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isNavOpen]);

  return (
    <>
      <main className="flex min-h-[100vh] bg-blue-900 max-w-[100vw] overflow-x-hidden text-[14px] relative">
        {/* Overlay for mobile */}
        {isNavOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}
        
        <aside
          className={`
            /* Desktop styles */
            md:w-[250px] md:min-w-[250px] md:min-h-[100vh] md:static md:translate-x-0
            
            /* Mobile styles */
            w-[280px] sm:w-[300px] xs:w-[250px]
            fixed left-0 top-[60px] bottom-0
            bg-tl_primary text-white shadow-md shadow-gray-400 font-[600]
            transition-transform duration-300 ease-in-out z-50
            overflow-y-auto
            
            ${isNavOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Link
            to={"/admin/home"}
            className="w-[180px] mx-auto my-4 md:block hidden overflow-hidden"
          >
            <span className="text-xl font-bold text-white lg:text-xl md:text-lg sm:text-base">
              Gloomshine Book Store
            </span>
          </Link>
          
          {/* Mobile logo in sidebar */}
          <div className="md:hidden px-4 py-4 border-b border-tl_primary_shade/30">
            <span className="text-lg font-bold text-white">
              Gloomshine Book Store
            </span>
          </div>
          
          <nav className="list-none pb-4">
            {links.map((item, i) => (
              <NavItem
                key={i}
                data={item}
                activeDrop={activeDrop}
                setActiveDrop={setActiveDrop}
                pathname={pathname}
              />
            ))}
          </nav>
        </aside>
        
        <section className="md:w-[calc(100vw-250px)] w-full flex-grow flex flex-col min-h-screen">
          <header className="w-full h-[60px] shadow shadow-gray-200 flex items-center justify-between px-4 md:px-8  z-[51] bg-white sticky top-0">
            <div className="flex items-center gap-3 md:gap-6 h-full">
              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setIsNavOpen((prev) => !prev)}
                className="p-2 md:hidden w-[35px] h-[35px] flex flex-col justify-center relative bg-transparent border-0 focus:outline-none"
                aria-label="Toggle navigation"
              >
                <div
                  className={`w-[20px] h-[2px] bg-tl_primary rounded-sm transition-all duration-300 absolute ${
                    isNavOpen
                      ? "rotate-45 translate-y-0"
                      : "rotate-0 -translate-y-1"
                  }`}
                />
                <div
                  className={`w-[20px] h-[2px] bg-tl_primary rounded-sm transition-all duration-300 ${
                    isNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`w-[20px] h-[2px] bg-tl_primary rounded-sm transition-all duration-300 absolute ${
                    isNavOpen
                      ? "-rotate-45 translate-y-0"
                      : "rotate-0 translate-y-1"
                  }`}
                />
              </button>
              
              {/* Desktop title */}
              <div className="hidden md:block">
                <p className="font-[600] text-gray-500 text-sm lg:text-base">
                  Admin
                </p>
              </div>
              
              {/* Mobile title */}
              <div className="md:hidden">
                <p className="font-[600] text-gray-800 text-sm sm:text-base truncate max-w-[200px] xs:max-w-[150px]">
                  Admin Panel
                </p>
              </div>
            </div>
            
            {/* Optional: Add user info or actions on the right */}
            <div className="flex items-center">
              {/* You can add user avatar, notifications, etc. here */}
            </div>
          </header>
          
          <section className="w-full p-4 md:p-6 lg:p-8 text-gray-600 bg-gray-100 min-h-[calc(100vh-60px)] flex-grow">
            {children}
          </section>
        </section>
      </main>
    </>
  );
}

const NavItem = ({
  data,
  styles = {},
  classNames = "",
  activeDrop,
  setActiveDrop,
  pathname,
}) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    console.log("log out");
  }

  return data.type === "dropdown" ? (
    <>
      <button
        onClick={() =>
          setActiveDrop((prev) =>
            prev.includes(data.to)
              ? prev.includes("area-management")
                ? "masters"
                : ""
              : data.to
          )
        }
        className="w-full bg-transparent text-white font-[600] border-0 text-left focus:outline-none"
      >
        <li
          className={`
            flex items-center gap-3 px-4 md:px-6
            border-t border-tl_primary_shade/30 
            hover:bg-tl_primary_shade/30 
            transition-all duration-500 
            h-[50px] md:h-[60px] mb-0 
            text-sm md:text-[14px]
            ${
              data.to
                ? activeDrop.includes(data.to) || pathname.includes(data.to)
                  ? "bg-tl_primary_shade/30"
                  : ""
                : pathname === "/admin/"
                ? "bg-tl_primary_shade/30"
                : ""
            } ${classNames}
          `}
          style={{ ...styles }}
        >
          {data.icon && <NavItemIcon icon={data.icon} />}
          <span className="flex-grow">{data.name}</span>
          <FaChevronRight
            className={`transition-all duration-300 font-[700] text-xs ${
              activeDrop.includes(data.to) ? "rotate-90" : "rotate-0"
            }`}
          />
        </li>
      </button>
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: activeDrop.includes(data.to)
            ? data.links.length * 50 + "px"
            : "0px",
        }}
      >
        {data.links.map((item, i) => (
          <NavItem
            key={i}
            data={item}
            classNames="!ps-8 md:!ps-12"
            activeDrop={activeDrop}
            setActiveDrop={setActiveDrop}
            pathname={pathname}
          />
        ))}
      </div>
    </>
  ) : (
    <Link
      to={data.name !== "Log out" ? `/admin/${data.to}` : null}
      onClick={data.name === "Log out" ? handleLogout : undefined}
      className="no-underline text-white font-[600] block"
    >
      <li
        className={`
          flex items-center gap-3 px-4 md:px-6
          h-[50px] md:h-[60px] 
          border-t border-tl_primary_shade/30 
          hover:bg-tl_primary_shade/30 
          transition-all duration-500 
          mb-0 admin-panel-nav-link
          text-sm md:text-[14px]
          ${
            data.to
              ? pathname.includes(data.to)
                ? "bg-tl_primary_shade/30 active-admin-panel-nav-link"
                : ""
              : pathname === "/admin/"
              ? "bg-tl_primary_shade/30"
              : ""
          } ${classNames}
        `}
        style={{ ...styles }}
      >
        {data.icon && <NavItemIcon icon={data.icon} />}
        <span>{data.name}</span>
      </li>
    </Link>
  );
};

const NavItemIcon = ({ icon }) => {
  return <span className="text-[16px] md:text-[18px] flex-shrink-0">{icon}</span>;
};

const links = [
  {
    name: "Home",
    to: "home",
    icon: <HiMiniHome />,
    type: "link",
  },
  {
    name: "Popular",
    to: "popular",
    icon: <GiSpellBook />,
    type: "link",
  },
  {
    name: "About Us",
    to: "aboutUs",
    icon: <MdOutlineDashboard />,
    type: "link",
  },
  {
    name: "Contact Us",
    to: "contactUs",
    icon: <MdOutlinePermPhoneMsg />,
    type: "link",
  },
  {
    name: "Log out",
    to: "login",
    icon: <VscSignOut />,
  },
];