import { useEffect, useState } from "react";
import Button from "../ui/button/Button";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import {
  locationIcon,
  callIcon,
  mailIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
  unionPng,
  schoolIcon,
} from "@/assets/images";

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

  const iconstyle: string =
    "flex items-center p-1 text-black bg-white rounded-xl cursor-pointer hover:bg-text-primary hover:text-white";

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Team",
      link: "team",
    },
    {
      name: "Upcoming Events",
      link: "upcoming-event",
    },
    {
      name: "Achievement",
      link: "achievement",
    },
    {
      name: "Work",
      link: "works",
    },
    {
      name: "Get in Touch",
      link: "get-in-touch",
    },
  ];

  return (
    <div className="relative top-0 z-50 ">
      <header className="w-auto relative hidden md:flex h-[6vh]  items-center bg-text-secondary text-white">
        <div className="flex justify-around  w-4/5 lg:w-3/4 text-xs md:text-xs lg:text-sm xl:text-lg">
          <div className="flex items-center md:gap-1 ">
            <img
              src={locationIcon}
              className="md:h-4 lg:h-5"
              alt="Location_icon"
            />
            <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
          </div>
          <span> | </span>
          <div className="flex items-center gap-1">
            <img src={callIcon} className="md:h-4 lg:h-5" alt="tel_icon" />
            <span>071562537, 9857043464</span>
          </div>
          <span> | </span>
          <div className="flex items-center gap-2">
            <img src={mailIcon} className="md:h-4 lg:h-5" alt="mail icon" />
            <span>info.iotrobotic@nepathyacollege.edu.np</span>
          </div>
        </div>

        <div className="flex gap-3 lg:gap-5 absolute right-5 lg:right-10">
          <div className={`facebook ${iconstyle}`}>
            <img src={facebookIcon} alt="facebook" />
          </div>
          <div className={`insta ${iconstyle}`}>
            <img src={instagramIcon} alt="instagram" />
          </div>
          <div className={`twitter ${iconstyle}`}>
            <img src={twitterIcon} alt="twitter" />
          </div>
          <div className={`youtube ${iconstyle}`}>
            <img src={youtubeIcon} alt="youtube" />
          </div>
        </div>
      </header>

      <header className="relative flex justify-between px-6 md:px-2 md:justify-around items-center w-auto h-[12vh] border-b-2 z-50 border-border-button bg-white">
        <Link to={"/"} className="h-4/5 w-auto">
          <img
            src={unionPng}
            alt="nepathya_college-png"
            className="h-full w-auto"
          />
        </Link>

        <nav
          className={`navlist ${
            active
              ? "flex flex-col z-50 items-center justify-end absolute left-0 right-0 top-[12vh] bg-white py-5  h-auto"
              : "hidden"
          } md:flex md:flex-row gap-6 lg:gap-12 md:font-medium lg:font-medium xl:font-semibold md:text-md lg:text-lg z-50`}
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
            icon={schoolIcon}
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
          icon={schoolIcon}
          style="hidden md:block px-1 py-2 md:p-2 lg:p-3 rounded-3xl"
          path="/join"
        />
      </header>
    </div>
  );
}

export default Navbar;
