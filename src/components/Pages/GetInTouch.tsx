import ContactForm from "../ui/form/ContactForm";
import ParticleBackground from "../ui/particle/ParticleBackground";
import {
  locationIcon,
  callIcon,
  mailIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "@/assets/images";

function GetInTouch() {
  const iconstyle: string =
    "flex items-center p-1 text-black bg-white  rounded-xl cursor-pointer hover:bg-blue-500 hover:scale-150";
  return (
    <div
      className="min-h-[82vh] space-y-10 mb-5 relative justify-center items-center max-w-screen "
      id="get-in-touch"
    >
      {/* bg-gradient-to-r from-teal-500 to-text-secondary */}
      <ParticleBackground color="black" />
      <div className="z-30 relative flex gap-5 justify-center items-center flex-col text-white text-center">
        <h2 className="font-playfair font-semibold text-text-secondary text-center text-2xl md:text-3xl leading-10">
          We'd Love to Hear From You!
        </h2>
        <p className="text-sm md:text-lg min-h-max font-light text-text-primary font-montserrat w-3/4 md:w-2/3">
          Got an innovative IoT idea, a suggestion, or a project you'd like to
          share? Connect with us and become part of the vibrant IoT Club
          community! Feel free to reach out and connect with the IoT Club
          community!
        </p>
      </div>
      <div className="flex flex-col gap-5  md:gap-0 md:flex-row justify-around w-full items-center h-full">
        <div className="relative w-5/6 md:w-1/2 flex z-10 h-full  items-center justify-center text-white">
          <div className="contactdiv flex flex-col gap-12 h-full w-full md:w-[90%] lg:w-3/4 rounded-md p-3 lg:px-8 py-10 z-30 bg-text-secondary ">
            {/* contact information */}
            <div className="flex flex-col gap-10 text-sm sm:text-base md:text-lg">
              <h3 className=" text-xl md:text-2xl font-playfair font-semibold">
                Contact Information
              </h3>
              <div className="flex gap-1">
                <a
                  href="https://www.google.com/maps?q=Manigram, Tilottama-5, Rupandehi, Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-1 md:gap-2"
                >
                  <img src={locationIcon} alt="Location_icon" />
                  <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
                </a>
              </div>
              <div className="flex gap-1">
                <a
                  href="mailto:info.iotrobotic@nepathyacollege.edu.np"
                  className="flex gap-1 md:gap-2"
                >
                  <img src={mailIcon} alt="mail icon" />
                  <span>info.iotrobotic@nepathyacollege.edu.np</span>
                </a>
              </div>

              <div className="flex gap-1 md:gap-2">
                <img src={callIcon} alt="tel_icon" />
                <a href="tel:9857043464" className="text-white">
                  071562537
                </a>
                <a href="tel:9857043464" className="text-white">
                  9857043464
                </a>
                <a href="tel:9857043464" className="text-white">
                  9867712849
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col space-y-5">
              <h3 className="text-xl md:text-2xl font-semibold font-playfair text-white">
                Social Media Links
              </h3>

              <div className="flex gap-10 md:gap-14 right-10">
                <div className={`facebook ${iconstyle}`}>
                  <img src={facebookIcon} alt="facebook" />
                </div>
                {/* https://www.facebook.com/nepathyaroboticsclub */}
                <div className={`insta ${iconstyle}`}>
                  <img src={instagramIcon} alt="instagram" />
                </div>
                {/* https://www.instagram.com/nepathyaiotrobotics/ */}
                <div className={`twitter ${iconstyle}`}>
                  <img src={twitterIcon} alt="twitter" />
                </div>
                <div className={`youtube ${iconstyle}`}>
                  <img src={youtubeIcon} alt="youtube" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 h-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
