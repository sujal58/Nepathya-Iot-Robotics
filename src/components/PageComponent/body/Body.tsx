import Button from "../../UI/button/Button";

function Body() {
  return (
    <div>
      <div className="section1 flex flex-col justify-around items-center gap-10 w-auto h-[75vh] ">
        <div className="flex flex-col w-full h-full">
          <div className="hometop flex px-8 h-full">
            <div className="leftcontent flex flex-col justify-center gap-4 font-sans w-2/4">
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
              />
            </div>

            <div className="rightcontent flex relative justify-end w-2/4 h-full ">
              <div className="w-8/12 h-3/4 absolute right-0 top-10 translate-x-6 border border-text-tertiary"></div>
            </div>
          </div>
          <div className="homebottom flex justify-around items-center w-full absolute bottom-0 bg-bg-nav ">
            <div className="">
              <img
                src="src\assets\union png.png"
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
      <div className="whosection w-auto h-[175px] flex flex-col items-center justify-evenly text-center bg-bg-secondary">
        <h2 className="font-semibold text-xl">Who We Are</h2>
        <div className="whopara w-2/4 ">
          <p className="font-medium text-md">
            The Robotics Club at Nepathya College is a community of innovators
            and tech enthusiasts passionate about robotics. We work on
            cutting-edge projects and host engaging events to inspire creativity
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
