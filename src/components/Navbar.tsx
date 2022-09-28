import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Nav } from "./SideBar";

export function Navbar() {
  const [active, setActive] = useState(true);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="w-full lg:px-12 p-8 py-6 flex items-center justify-between bg-gray-700 border-b border-gray-600 xl:justify-center md:py-5">
        <div className="flex w-full items-center">
          <Link className="w-10 items-center" to={"/event"}>
            <Logo />
          </Link>
          <p className="h-full pl-2 font-bold"> | Plataform Event</p>
        </div>

        <List
          size={32}
          onClick={showMenu}
          className={active ? "block xl:hidden" : "hidden"}
        />
        <X
          size={32}
          onClick={showMenu}
          className={active ? "hidden" : "block"}
        />
        <nav
          className={
            active
              ? "hidden"
              : "block bg-gray-600 drop-shadow-[0_0_15px_rgb(254,34,72)] absolute z-50 top-20 mr-12 p-8 rounded-xl"
          }
        >
          <Nav />
        </nav>
      </header>
    </>
  );
}
