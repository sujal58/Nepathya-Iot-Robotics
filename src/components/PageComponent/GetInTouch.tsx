import ParticleBackground from "../UI/particle/ParticleBackground";

function GetInTouch() {
  const iconstyle: string =
    "flex items-center p-1 text-black bg-white  rounded-xl cursor-pointer hover:bg-teal-500 hover:scale-150";
  return (
    <div className="min-h-[82vh] relative justify-center items-center max-w-screen bg-gradient-to-r from-teal-500 to-text-secondary">
      <ParticleBackground />

      <div className="bg-text-primary  text-white text-center">
        <h2 className=" text-white text-center text-3xl leading-10">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-400">
          <i>
            We'd love to hear from you. Feel free to contact us for any
            inquiries!
          </i>
        </p>
      </div>

      <div className="relative flex flex-col z-10 gap-5 items-center justify-center  md:mt-0">
        <div className="flex flex-col space-y-6 z-30">
          {/* contact information */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-center font-semibold text-gray-700">
              Contact Information
            </h3>
            <p className="text-lg text-gray-600">
              Email:{" "}
              <a
                href="mailto:info.iotrobotic@nepathyacollege.edu.np"
                className="text-text-primary"
              >
                info.iotrobotic@nepathyacollege.edu.np
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Facebook:{" "}
              <a
                href="https://www.facebook.com/nepathyaroboticsclub"
                className="text-text-primary"
              >
                Nepathya IOT and Robotics Union
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/nepathyaiotrobotics/
"
                className="text-text-primary"
              >
                Nepathya IOT and Robotics Union
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Phone:{" "}
              <a href="tel:9867712849" className="text-text-primary">
                9867712849
              </a>
            </p>
            <p className="text-lg text-gray-600">
              Phone:{" "}
              <a href="tel:9857043464" className="text-text-primary">
                9857043464
              </a>
            </p>
          </div>

          {/* Adrress details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Location
            </h3>
            <p className="text-lg text-gray-600">
              Tilottama -05, Manigram, Butwal, Nepal
            </p>
          </div>
          {/* Social Media Links */}
        </div>
        <div className="flex gap-20 right-10">
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
      </div>
    </div>
  );
}

export default GetInTouch;
