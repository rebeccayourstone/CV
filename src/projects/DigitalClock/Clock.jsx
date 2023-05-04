function Clock(props) {
  // gets info from built in get....()
  let day = props.time.getDate();
  let weekDay = props.time.getDay();
  let month = props.time.getMonth();
  let year = props.time.getFullYear();
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();
  let seconds = props.time.getSeconds();

  //Some fun switches to format output
  switch (month) {
    case 0:
      {
        month = "JAN";
      }
      break;
    case 1:
      {
        month = "FEB";
      }
      break;
    case 2:
      {
        month = "MAR";
      }
      break;
    case 3:
      {
        month = "APR";
      }
      break;
    case 4:
      {
        month = "MAY";
      }
      break;
    case 5:
      {
        month = "JUN";
      }
      break;
    case 6:
      {
        month = "JUL";
      }
      break;
    case 7:
      {
        month = "AUG";
      }
      break;
    case 8:
      {
        month = "SEP";
      }
      break;
    case 9:
      {
        month = "OCT";
      }
      break;
    case 10:
      {
        month = "NOV";
      }
      break;
    case 11:
      {
        month = "DEC";
      }
      break;
    default: {
      month = null;
    }
  }

  switch (weekDay) {
    case 0:
      {
        weekDay = "SUNDAY";
      }
      break;

    case 1:
      {
        weekDay = "MONDAY";
      }
      break;
    case 2:
      {
        weekDay = "TUESDAY";
      }
      break;
    case 3:
      {
        weekDay = "WEDNESDAY";
      }
      break;
    case 4:
      {
        weekDay = "THURSDAY";
      }
      break;
    case 5:
      {
        weekDay = "FRIDAY";
      }
      break;
    case 6:
      {
        weekDay = "SATURDAY";
      }
      break;
    default: {
      weekDay = null;
    }
  }

  return (
    <div className="clock-container">
      {/* prints date */}
      <span className="clock-date">
        <span className="clock-span"> {weekDay} </span>
        <span className="clock-span">
          {month} {day.toString().padStart(2, "0")} {year}
        </span>
      </span>
      {/* prints time */}
      <span className="clock-clock">
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </span>
    </div>
  );
}
export default Clock;
