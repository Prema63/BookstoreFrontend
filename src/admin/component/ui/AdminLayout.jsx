import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { HiMiniHome } from "react-icons/hi2";
import { GiSpellBook } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

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
      if (
        isNavOpen &&
        !event.target.closest("aside") &&
        !event.target.closest('button[type="button"]')
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  return (
    <>
      <main className="flex h-screen max-w-[100vw] overflow-hidden text-[14px] relative">
        {/* Overlay for mobile/tablet */}
        {isNavOpen && (
          <div
            className="fixed inset-0 bg-blue-900 bg-opacity-10 lg:hidden"
            onClick={() => setIsNavOpen(false)}
          />
        )}

        <aside
          className={`
            /* Desktop styles (xl and above) */
            xl:w-[250px] xl:min-w-[250px] xl:h-screen xl:static xl:translate-x-0
            
            /* Large desktop styles */
            lg:w-[220px] lg:min-w-[220px] lg:h-screen lg:static lg:translate-x-0
            
            /* Mobile/tablet styles */
            w-[280px] sm:w-[300px] xs:w-[250px]
            fixed left-0 top-[60px] bottom-0
            bg-blue-900 text-white shadow-md shadow-gray-400 font-[600]
            transition-transform duration-300 ease-in-out z-50
            overflow-y-auto
            
            ${
              isNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }
          `}
          style={{
            /* Hide scrollbar but keep functionality */
            scrollbarWidth: 'none', /* Firefox */
            msOverflowStyle: 'none', /* IE and Edge */
            WebkitScrollbar: 'none' /* Chrome, Safari */
          }}
        >
          {/* Add CSS for webkit browsers */}
          {/* <style jsx>{`
            aside::-webkit-scrollbar {
              display: none;
            }
          `}</style> */}
          
          <Link
            to={"/admin/home"}
            className="w-[180px] mx-auto my-4 lg:block hidden overflow-hidden"
          >
            <span className="text-white font-bold 2xl:text-xl xl:text-lg lg:text-base">
              Gloomshine Book Store
            </span>
          </Link>

          {/* Mobile/tablet logo in sidebar */}
          <div className="lg:hidden px-4 py-4 border-b border-blue-700/30">
            <span className="text-white font-bold text-lg sm:text-xl">
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

        <section className="lg:w-[calc(100vw-220px)] xl:w-[calc(100vw-250px)] w-full flex-grow flex flex-col h-screen">
          <header className="w-full h-[60px] shadow shadow-gray-200 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-6 xl:px-8 z-[51] bg-white flex-shrink-0">
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6 h-full">
              {/* Mobile/tablet hamburger button */}
              <button
                type="button"
                onClick={() => setIsNavOpen((prev) => !prev)}
                className="p-2 font-bold text-gray-900 lg:hidden w-[35px] h-[35px] flex flex-col justify-center relative border-0 focus:outline-none"
                aria-label="Toggle navigation"
              >
                <div
                  className={`w-[20px] h-[2px] bg-blue-800 rounded-sm transition-all duration-300 absolute ${
                    isNavOpen
                      ? "rotate-45 translate-y-0"
                      : "rotate-0 -translate-y-1"
                  }`}
                />
                <div
                  className={`w-[20px] h-[2px] bg-blue-800 rounded-sm transition-all duration-300 ${
                    isNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <div
                  className={`w-[20px] h-[2px] bg-blue-800 rounded-sm transition-all duration-300 absolute ${
                    isNavOpen
                      ? "-rotate-45 translate-y-0"
                      : "rotate-0 translate-y-1"
                  }`}
                />
              </button>

              {/* Desktop title */}
              <div className="hidden lg:block">
                <p className="font-[600] text-gray-500 text-sm xl:text-base 2xl:text-lg">
                  Admin
                </p>
              </div>

              {/* Mobile/tablet title */}
              <div className="lg:hidden">
                <p className="font-[600] text-gray-800 text-sm sm:text-base md:text-lg truncate max-w-[150px] xs:max-w-[180px] sm:max-w-[200px] md:max-w-[250px]">
                  Admin Panel
                </p>
              </div>
            </div>

            {/* Optional: Add user info or actions on the right */}
            <div className="flex items-center">
              {/* You can add user avatar, notifications, etc. here */}
            </div>
          </header>

          <section 
            className="w-full p-3 sm:p-4 md:p-6 lg:p-4 xl:p-6 2xl:p-8 text-gray-600 bg-gray-100 flex-grow overflow-y-auto"
            style={{
              /* Hide scrollbar but keep functionality */
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE and Edge */
            }}
          >
            {/* Add CSS for webkit browsers */}
            <style jsx>{`
              section::-webkit-scrollbar {
                display: none;
              }
            `}</style>
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
            flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-4 xl:px-6
            border-t border-blue-700/30 
            hover:bg-blue-700/30 
            transition-all duration-500 
            h-[45px] sm:h-[50px] lg:h-[55px] xl:h-[60px] mb-0 
            text-xs sm:text-sm lg:text-[13px] xl:text-[14px] 2xl:text-base
            ${
              data.to
                ? activeDrop.includes(data.to) || pathname.includes(data.to)
                  ? "bg-blue-700/30"
                  : ""
                : pathname === "/admin/"
                ? "bg-blue-700/30"
                : ""
            } ${classNames}
          `}
          style={{ ...styles }}
        >
          {data.icon && <NavItemIcon icon={data.icon} />}
          <span className="flex-grow">{data.name}</span>
          <FaChevronRight
            className={`transition-all duration-300 font-[700] text-[10px] sm:text-xs ${
              activeDrop.includes(data.to) ? "rotate-90" : "rotate-0"
            }`}
          />
        </li>
      </button>
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: activeDrop.includes(data.to)
            ? data.links.length *
                (window.innerWidth >= 1280
                  ? 60
                  : window.innerWidth >= 1024
                  ? 55
                  : window.innerWidth >= 640
                  ? 50
                  : 45) +
              "px"
            : "0px",
        }}
      >
        {data.links.map((item, i) => (
          <NavItem
            key={i}
            data={item}
            classNames="!ps-6 sm:!ps-8 lg:!ps-8 xl:!ps-12"
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
          flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-4 xl:px-6
          h-[45px] sm:h-[50px] lg:h-[55px] xl:h-[60px] 
          border-t border-blue-700/30 
          hover:bg-blue-700/30 
          transition-all duration-500 
          mb-0 admin-panel-nav-link
          text-xs sm:text-sm lg:text-[13px] xl:text-[14px] 2xl:text-base
          ${
            data.to
              ? pathname.includes(data.to)
                ? "bg-blue-700/30 active-admin-panel-nav-link"
                : ""
              : pathname === "/admin/"
              ? "bg-blue-700/30"
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
  return (
    <span className="text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] flex-shrink-0">
      {icon}
    </span>
  );
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