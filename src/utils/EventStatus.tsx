const currentDate = new Date();

function EventStatus(date: string) {
  let status = "Upcoming";
  let programDate = new Date(date);

  if (date == " ") {
    status = "Upcoming";
  } else if (currentDate < programDate) {
    status = "Upcoming";
  } else if (currentDate > programDate) {
    status = "Completed";
  } else if (currentDate.toDateString() === programDate.toDateString()) {
    console.log("hello");
    status = "Active";
  }

  return status;
}

export default EventStatus;
