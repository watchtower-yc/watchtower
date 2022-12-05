import { useState } from "react";

const CountdownList = () => {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [mins, setMins] = useState();
  const [sec, setSec] = useState();

  const countDownDate = new Date("Dec 16, 2022 8:30:00");

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    // setTimer(timer.days = days)
    // setTimer(timer.hour = hours)
    // setTimer(timer.mins = minutes)
    // setTimer(timer.sec = seconds)
    setDay(days);
    setHour(hours);
    setMins(minutes);
    setSec(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setDay(0);
    setHour(0);
    setMins(0);
    setSec(0);
    }
  }, 1000);


  return (
    <div className="flex justify-around mt-8">
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">
          {day}
        </p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          days
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">
          {hour}
        </p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          hours
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">
          {mins}
        </p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          minutes
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">
          {sec}
        </p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          seconds
        </p>
      </div>
    </div>
  );
};

export default CountdownList;
