import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActive(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavlinkClick = () => {
    if (window.innerWidth <= 768) {
      setActive(!active);
    }
  };
  // setActive(!active);
  const iconstyle: string =
    "flex items-center p-1 text-black bg-white rounded-xl cursor-pointer hover:bg-text-primary hover:text-white";

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Team",
      link: "/team",
    },
    {
      name: "Upcoming Events",
      link: "/upcoming-event",
    },
    {
      name: "Our Work",
      link: "/works",
    },
    {
      name: "Get in Touch",
      link: "/get-in-touch",
    },
  ];

  return (
    <div className="relative z-30 ">
      <header className="w-auto hidden md:flex h-[6vh]  items-center bg-bg-nav text-white">
        <div className="flex justify-around w-4/5 lg:w-3/4 text-xs lg:text-md xl:text-lg">
          <div className="flex items-center gap-1">
            <img
              src="src\assets\location_icon.svg"
              className="md:h-4 lg:h-5"
              alt="Location_icon"
            />
            <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
          </div>
          <span> | </span>
          <div className="flex items-center gap-1">
            <img
              src="src/assets/call_icon.svg"
              className="md:h-4 lg:h-5"
              alt="tel_icon"
            />
            <span>071562537, 9857043464</span>
          </div>
          <span> | </span>
          <div className="flex items-center gap-2">
            <img
              src="src/assets/mail_icon.svg"
              className="md:h-4 lg:h-5"
              alt="mail icon"
            />
            <span>info.iotrobotic@nepathyacollege.edu.np</span>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-5 absolute right-5 lg:right-10">
          <div className={`facebook ${iconstyle}`}>
            <img src="src\assets\facebook.svg" alt="facebook" />
          </div>
          <div className={`insta ${iconstyle}`}>
            <img src="src\assets\instagram.svg" alt="instagram" />
          </div>
          <div className={`twitter ${iconstyle}`}>
            <img src="src\assets\x-twitter.svg" alt="instagram" />
          </div>
          <div className={`youtube ${iconstyle}`}>
            <img src="src\assets\youtube.svg" alt="instagram" />
          </div>
        </div>
      </header>

      <header className="relative flex justify-between px-6 md:px-2 md:justify-around items-center w-auto h-[12vh] border-b-2 border-border-button bg-white">
        <img
          src="src\assets\union_png.png"
          alt="nepathya_college-png"
          className="h-4/5 w-auto"
        />

        <nav
          className={`navlist ${
            active
              ? "flex flex-col z-40 items-center justify-end absolute left-0 right-0 top-[12vh] bg-white py-5  h-auto"
              : "hidden"
          } md:flex md:flex-row gap-6 lg:gap-12 md:font-medium lg:font-medium xl:font-bold md:text-md lg:text-lg`}
        >
          {navItems.map((value, index) => {
            return (
              <NavLink
                to={value.link}
                key={value + "_" + index}
                onClick={handleNavlinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border md:text-text-tertiary md:bg-white border-text-tertiary md:border-none bg-text-primary w-3/4 md:w-auto rounded-xl text-center md:py-0 py-1"
                    : "text-gray-800 hover:text-text-secondary"
                }
              >
                {value.name}
              </NavLink>
            );
          })}
          <Button
            text="Join the Club"
            alternate="Graduation_cap"
            icon="src\assets\school_icon.svg"
            style="block md:hidden p-3 sm:w-1/2 md:p-2 lg:p-3 rounded-3xl"
            path="/join"
          />
        </nav>

        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setActive(!active)}
        >
          {active ? (
            <RxCross2 className="text-4xl" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </div>
        <Button
          text="Join the Club"
          alternate="Graduation_cap"
          icon="src\assets\school_icon.svg"
          style="hidden md:block px-1 py-2 md:p-2 lg:p-3 rounded-3xl"
          path="/join"
        />
      </header>
    </div>
  );
}

export default Navbar;
