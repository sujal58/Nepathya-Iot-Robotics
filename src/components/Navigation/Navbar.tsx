import Button from "../UI/button/Button";
import { Link } from "react-router-dom";

function Navbar() {
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
    <div className="relative z-30">
      <header className="w-auto h-[6vh] flex items-center bg-bg-nav text-white">
        <div className="flex justify-around w-3/4">
          <div className="flex gap-1">
            <img src="src\assets\location_icon.svg" alt="Location_icon" />
            <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
          </div>
          <span> | </span>
          <div className="flex gap-1">
            <img src="src/assets/call_icon.svg" alt="tel_icon" />
            <span>071562537, 9857043464</span>
          </div>
          <span> | </span>
          <div className="flex gap-2">
            <img src="src/assets/mail_icon.svg" alt="mail icon" />
            <span>info.iotrobotic@nepathyacollege.edu.np</span>
          </div>
        </div>

        <div className="flex gap-5 absolute right-10">
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

      <header className="flex justify-around items-center w-auto h-[12vh] border-b-2 border-border-button bg-white">
        <img
          src="src\assets\union_png.png"
          alt="nepathya_college-png"
          className="h-4/5 w-auto"
        />

        <nav className="navlist flex gap-12 font-semibold text-lg">
          {navItems.map((value, index) => {
            return (
              <Link
                to={value.link}
                key={value + "_" + index}
                className="hover:text-text-secondary"
              >
                {value.name}
              </Link>
            );
          })}
        </nav>
        <Button
          text="Join the Club"
          alternate="Graduation_cap"
          icon="src\assets\school_icon.svg"
          style="p-3 rounded-3xl"
          path="/join"
        />
      </header>
    </div>
  );
}

export default Navbar;
