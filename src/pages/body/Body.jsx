import React from "react";
import Button from "../../components/button/Button";

function Body() {
  return (
    <div>
      <div className="section1 flex flex-col justify-around items-center gap-10 w-screen h-[330px] ">
        <div className="flex flex-col gap-6">
          <div className="topcontent font-semibold font-sans text-4xl text-text-secondary">
            <h1>Unleashing Innovation Through IOT & Robotics ! </h1>
          </div>

          <div className="buttomcontent flex flex-col gap-2 text-center text-4xl">
            <span>Join us to explore, create and </span>
            <span> innovation in the field of robotics.</span>
          </div>
        </div>
        <Button text="Join the Club" style="p-4 rounded-3xl w-1/5 text-xl" />
      </div>
      <div className="whosection w-screen h-[175px] flex flex-col items-center justify-evenly text-center bg-bg-secondary">
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
