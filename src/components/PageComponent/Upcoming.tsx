import program from "../../data/program.json";
import EventStatus from "../../utils/EventStatus";

function Upcoming() {
  return (
    <div className="min-h-[82vh] z-30 bg-white">
      <div className=" flex flex-col text-text-primary">
        <div className="heading h-1/4 bg-text-secondary text-white">
          <h2 className="text-white text-center text-3xl leading-10">
            UPCOMING EVENTS
          </h2>
        </div>
        <div className=" flex flex-col justify-around gap-5 mt-10 mx-10">
          <div className="text-text-tertiary flex justify-between">
            <div className="w-1/5 text-center font-bold">Date</div>
            <div className="w-1/5 text-center text-lg font-bold">
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
                <div className="w-1/5 text-center text-lg font-medium">
                  {value.eventName}
                </div>
                <div className="text-right w-1/5">
                  {EventStatus(value.date)}
                </div>
                <div className="eventBtn flex gap-5 w-2/5 justify-end">
                  <a href={value.buttons.detailUrl}>
                    <button className="border-2 border-text-primary px-5 py-2">
                      Details
                    </button>
                  </a>
                  <a href={value.buttons.registerUrl}>
                    <button className="border-2 border-text-primary px-5 py-2">
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
