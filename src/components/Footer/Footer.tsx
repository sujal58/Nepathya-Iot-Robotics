import { callIcon, locationIcon, mailIcon } from "@/assets/images";
import unionLogo from "/Nepathya-Iot-Robotics/union_png.png";

function Footer() {
  return (
    <footer className="relative min-h-max w-full z-30">
      <div className="flex flex-col lg:flex-row gap-5 bg-text-primary text-white px-5 py-5 h-full justify-center">
        <div className="lg:w-[40%] h-full flex flex-col space-y-5">
          <div className="flex items-center gap-2">
            <img src={unionLogo} alt="club logo" className="h-[70px]" />
            <h2 className="text-2xl font-semibold font-playfair">
              Nepathya Iot and Robotics Union
            </h2>
          </div>
          <span className="text-justify">
            Nepathya IoT & Robotics Union is a student-driven club at Nepathya
            College, located in Tilottama-5,Manigram, Nepal. Our mission is to
            explore and advance the fields of (IoT) and Robotics by fostering
            creativity, learning, and innovation among students.
          </span>
        </div>
        <div className="lg:w-[40%] space-y-5">
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
        </div>
        <div className="lg:w-[20%]  ">
          <div className="flex flex-col gap-6 md:gap-10 text-sm sm:text-base md:text-lg">
            <h3 className=" text-xl md:text-2xl font-playfair font-semibold">
              Useful Links
            </h3>
            <div className="flex">
              <a
                href="https://tu.edu.np/"
                target="_blank"
                className="flex gap-1 md:gap-2 hover:text-text-primary"
              >
                Tribhuvan University
              </a>
            </div>
            <div className="flex">
              <a
                href="https://nepathyacollege.edu.np/"
                className="flex gap-1 md:gap-2 hover:text-text-primary"
              >
                Nepathya College
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full text-center bg-text-secondary text-gray-400 font-poppins">
        <span className="text-center py-2 text-xs md:text-sm">
          Copyright &copy; {new Date().getFullYear()} Nepathya Iot And Robotics
          Union, All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
