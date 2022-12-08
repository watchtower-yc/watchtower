import React from "react";
import Footer from "../../components/footer/footer.component";

const Csr = () => {
  return (
    <div className="">
          <div className=" px-10">
          <div className=" mt-10">
        <h1 className=" font-extrabold ">WHAT IS CSR ?</h1>
        <div className="border border-gray-400 mt-1 bg-black w-20 "></div>

        <p className=" mt-2">
          Corporate Social Responsibility (CSR) is the idea that a company
          should play a positive role in the community and consider the
          environmental and social impact of business decisions.
        </p>
      </div>

      <div className=" mt-10">
        <h1 className=" font-extrabold">WHY WE DO IT ?</h1>
        <div className="border border-gray-400 mt-1 bg-black w-20 "></div>
        <div className=" mt-2">
          Corporate Social Responsibility has its root in Christianity and the
          church is meant to be an example for the world to follow and not the
          other way round We see the Christian Social Responsibility as a
          conscious avenue for christians to make visible impact in various key
          areas of society. Where many see societal challenges and its scale all
          around the world. We see an opportunity to take decisive effort to
          creating solutions as we work with people, communities, leaders and
          governments worldwide.
        </div>
          </div>
          

          <div className=" mt-10 px-4">
              <ul>
                  <li className=" list-disc">WATCHTOWER FOOTBALL ACADEMY</li>
                  <li className=" list-disc">WATCHTOWER BASKETALLERS</li>
                  <li  className=" list-disc">WATCHTOWER MONOPOLY HUB</li>
                  <li  className=" list-disc"> WATCHTOWER CHESS HUB</li>
              </ul>
          </div>

          <div className=" mt-10 flex justify-center items-center mb-20">
              <button className=" bg-blue-900 text-white font-bold px-4 py-3">KNOW MORE</button>
          </div>

          </div>
          <Footer />
    </div>
  );
};

export default Csr;
