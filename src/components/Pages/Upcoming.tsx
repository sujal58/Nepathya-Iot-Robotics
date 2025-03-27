import program from "../../data/program.json";
import EventStatus from "../../utils/EventStatus";

function Upcoming() {
  return (
    <div
      className="min-h-[82vh] relative z-30 md:mt-0 pb-10 md:pb-0 bg-white border-b border-text-primary"
      id="upcoming-event"
    >
      <div className=" flex flex-col text-text-primary">
        <div className="heading py-1 bg-text-secondary text-white">
          <h2 className="text-white text-center  font-playfair font-semibold xs:text-xl sm:text-2xl md:text-3xl leading-10">
            UPCOMING EVENTS
          </h2>
        </div>
        <div className=" flex flex-col justify-around gap-5 mt-10 md:mx-10">
          <div className="text-text-tertiary flex justify-between">
            <div className="w-1/5 text-center font-bold">Date</div>
            <div className="w-1/5 text-center md:text-lg font-bold">
              Event Name
            </div>
            <div className="text-right w-1/5 font-bold">Status</div>
            <div className="eventBtn flex gap-5 w-2/5 justify-end font-bold">
              Action Button
            </div>
          </div>
          {program.map((value, index) => {
            return (
              <div className="eventlist flex justify-between" key={index}>
                <div className="w-1/5 text-center">
                  {value.date == "" ? "Not Fixed yet" : value.date}
                </div>
                <div className="w-1/5 text-center md:text-lg md:font-medium">
                  {value.eventName}
                </div>
                <div className="text-right w-1/5">
                  {EventStatus(value.date)}
                </div>
                <div className="eventBtn flex flex-col md:flex-row gap-1 md:gap-5 w-2/5 justify-end items-end">
                  <a href={value.buttons.detailUrl}>
                    <button className="border-2 border-text-primary py-1 px-5 md:py-2">
                      Details
                    </button>
                  </a>
                  <a href={value.buttons.registerUrl}>
                    <button className="border-2 border-text-primary px-2 py-1 md:px-5 md:py-2">
                      Register Now
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
