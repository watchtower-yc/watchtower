const Countdown = () => {
  return (
    <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
      <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">23</p>
      <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
        days
      </p>
    </div>
  );
};

export default Countdown;
