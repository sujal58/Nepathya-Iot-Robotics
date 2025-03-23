import Button from "../UI/button/Button";

function Body() {
  return (
    <div className="section1 z-30 flex flex-col justify-around items-center gap-10 w-auto min-h-[82vh] ">
      <div className="flex flex-col w-full h-full">
        <div className="hometop flex flex-col justify-center gap-4 px-8 h-full font-sans w-2/4">
          <div className="pr-16">
            <h1 className="mainbodyheader font-bold text-4xl text-bg-nav tracking-wide leading-normal text-wrap">
              Unlock New Horizons with IOT & Robotics
            </h1>
            <span className="text-lg text-black tracking-wide">
              Join us to explore, create and innovation in the field of
              robotics.
            </span>
          </div>
          <Button
            text="Join the Club"
            style="p-3 rounded-3xl text-2xl w-2/4"
            path="/join"
          />
        </div>
        <div className="homebottom flex justify-around items-center w-full bottom-0 absolute bg-bg-nav ">
          <div className="">
            <img
              src="src\assets\union_png.png"
              alt="Union_Logo"
              className="h-16 w-16"
            />
          </div>
          <div className="">
            <h1 className=" h1-animate text-center uppercase text-white text-3xl shadow">
              Welcome to nepathya iot and RObotics Union
            </h1>
          </div>
          <div className="bg-white rounded-[50%]">
            <img
              src="src\assets\nepathya-college.png"
              alt="Union_Logo"
              className="h-16 w-16 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
