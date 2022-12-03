const CountdownList = () => {
  return (
    <div className="flex justify-around mt-8">
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">23</p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          days
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">10</p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          hours
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">41</p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          minutes
        </p>
      </div>
      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full text-center border-2 border-[#0B0037] flex flex-col justify-end">
        <p className="font-bold text-2xl md:text-4xl pb-2 text-[#0B0037]">00</p>
        <p className="bg-[#0B0037] text-white text-xs md:text-sm rounded-b-full py-2 md:py-5 uppercase">
          seconds
        </p>
      </div>
    </div>
  );
};

export default CountdownList;
