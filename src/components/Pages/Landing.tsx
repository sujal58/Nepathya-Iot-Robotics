import { collegePng, unionPng } from "@/assets/images";
import Button from "../ui/button/Button";
function Landing() {
  return (
    <div
      className="section1 relative z-30 flex flex-col justify-around items-center gap-10 w-full min-h-[88vh] md:min-h-[82vh] "
      id="/"
    >
      <div className="flex flex-col w-full h-full">
        <div className="hometop flex flex-col justify-between gap-4 px-4 h-full font-sans w-full">
          <div className="pr-16 md:w-3/5">
            <h1 className="mainbodyheader font-bold font-playfair text-2xl lg:text-4xl text-bg-nav tracking-wide leading-normal text-wrap">
              Unlock New Horizons with IOT & Robotics
            </h1>
            <span className="text-lg text-black font-montserrat tracking-wide">
              Join us to explore, create and innovation in the field of
              robotics.
            </span>
          </div>
          <Button
            text="Join the Club"
            style="xs:p-2 xs:text-md  p-3 rounded-3xl text-2xl w-3/4 md:w-1/3 lg:w-1/4"
            path="/join"
          />
        </div>
        <div className="homebottom flex justify-around items-center w-full bottom-0 absolute bg-text-secondary ">
          <div className="">
            <img src={unionPng} alt="Union_Logo" className=" lg:h-16 w-16" />
          </div>
          <div className="">
            <h1 className=" h1-animate text-center font-playfair uppercase text-white text-md sm:text-xl lg:text-3xl shadow">
              Welcome to nepathya iot and RObotics Union
            </h1>
          </div>
          <div className="bg-white rounded-[50%]">
            <img src={collegePng} alt="Union_Logo" className="lg:h-16 w-16 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
