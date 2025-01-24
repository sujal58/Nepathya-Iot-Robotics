import Button from "../UI/button/Button";

function Navbar() {
  const iconstyle: string =
    "flex items-center p-1 text-black bg-white rounded-xl cursor-pointer hover:bg-text-primary hover:text-white";
  return (
    <>
      <header className="w-auto h-[38px] flex items-center bg-bg-nav text-white">
        <div className="flex justify-around w-3/4">
          <div className="flex gap-1">
            <img src="src\assets\location_icon.svg" alt="Location_icon" />
            <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
          </div>
          <span> | </span>
          <div className="flex gap-1">
            <img src="src/assets/call_icon.svg" alt="tel_icon" />
            <span>071562537, 9857034838, 9846970252</span>
          </div>
          <span> | </span>
          <div className="flex gap-2">
            <img src="src/assets/mail_icon.svg" alt="mail icon" />
            <span>info@nepathyacollege.edu.np</span>
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

      <header className="flex justify-around items-center w-auto h-[90px] border-2 border-border-button">
        <img
          src="src\assets\NepathyaCollege_Web_png.png"
          alt="nepathya_college-png"
          className="h-16"
        />
        <nav className="navlist flex gap-5 font-semibold">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Course</a>
          <a href="#">Student Life</a>
          <a href="#">Career</a>
          <a href="#">Contact</a>
          <a href="#">Career</a>
          <a href="#">ProjectHub</a>
        </nav>
        {/* <a className='bg-bg-button text-white p-3 rounded-3xl'> */}
        <Button
          text="Get Admission"
          alternate="Graduation_cap"
          icon="src\assets\school_icon.svg"
          style="p-3 rounded-3xl"
        />
        {/* <button className='flex gap-2'>
            <div>
              <img src="src\assets\school_icon.svg" alt="" />
            </div>
            <span>Get Admission</span>
          </button> */}
        {/* </a> */}
      </header>
    </>
  );
}

export default Navbar;
