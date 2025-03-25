import ContactForm from "../ui/form/ContactForm";
import ParticleBackground from "../ui/particle/ParticleBackground";

function GetInTouch() {
  const iconstyle: string =
    "flex items-center p-1 text-black bg-white  rounded-xl cursor-pointer hover:bg-teal-500 hover:scale-150";
  return (
    <div className="min-h-[82vh] space-y-10 mb-5 relative justify-center items-center max-w-screen ">
      {/* bg-gradient-to-r from-teal-500 to-text-secondary */}
      <ParticleBackground color="black" />
      <div className="z-30 text-white text-center">
        <h2 className="font-playfair font-semibold text-text-secondary text-center text-2xl md:text-3xl leading-10">
          Get in Touch with us !!
        </h2>
        <p className="text-md md:text-xl text-black font-montserrat">
          <i>
            We'd love to hear from you. Feel free to contact us for any
            inquiries!
          </i>
        </p>
      </div>
      <div className="flex flex-col gap-5  md:gap-0 md:flex-row justify-around w-full items-center h-full">
        <div className="relative text-xs md:text-lg w-5/6 md:w-1/2 flex z-10 h-full  items-center justify-center text-white">
          <div className="contactdiv flex flex-col gap-12 lg:w-2/3 h-full rounded-md p-3 lg:px-8 py-10 z-30 bg-text-secondary ">
            {/* contact information */}
            <div className="flex flex-col gap-10 ">
              <h3 className=" text-xl md:text-2xl font-montserrat font-semibold">
                Contact Information
              </h3>
              <div className="flex gap-1">
                <a
                  href="https://www.google.com/maps?q=Manigram, Tilottama-5, Rupandehi, Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex md:gap-2"
                >
                  <img src="src/assets/location_icon.svg" alt="Location_icon" />
                  <span>Manigram, Tilottama-5, Rupandehi, Nepal</span>
                </a>
              </div>
              <div className="flex gap-1">
                <a
                  href="mailto:info.iotrobotic@nepathyacollege.edu.np"
                  className="flex gap-1 md:gap-2"
                >
                  <img src="src/assets/mail_icon.svg" alt="mail icon" />
                  <span>info.iotrobotic@nepathyacollege.edu.np</span>
                </a>
              </div>

              <div className="flex gap-1 md:gap-2">
                <img src="src/assets/call_icon.svg" alt="tel_icon" />
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

            <div className="flex flex-col space-y-5">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Social Media Links
              </h3>
              {/* Social Media Links */}
              <div className="flex gap-10 md:gap-14 right-10">
                <div className={`facebook ${iconstyle}`}>
                  <img src="src\assets\facebook.svg" alt="facebook" />
                </div>
                {/* https://www.facebook.com/nepathyaroboticsclub */}
                <div className={`insta ${iconstyle}`}>
                  <img src="src\assets\instagram.svg" alt="instagram" />
                </div>
                {/* https://www.instagram.com/nepathyaiotrobotics/ */}
                <div className={`twitter ${iconstyle}`}>
                  <img src="src\assets\x-twitter.svg" alt="instagram" />
                </div>
                <div className={`youtube ${iconstyle}`}>
                  <img src="src\assets\youtube.svg" alt="instagram" />
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
