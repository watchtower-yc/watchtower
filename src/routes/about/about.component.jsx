import PastorT from "../images/Pastor.png";
import PastorI from "../images/Apastor.png";

const About = () => {
  return (
    <div className=" mt-4">
      <div>
        <h1 className=" font-extrabold text-2xl text-blue-900">
          About Watchtower
        </h1>

        <p className=" italic font-thin text-lg mt-3">
          A little description why we are building a Family
        </p>
      </div>

      {/* Watchtower description */}
      <div className=" text-base mt-4 h-4/6 grid grid-cols-1 gap-5 ">
        <p>
          When God told Noah to build an Ark in Genesis 7, it was intended to be
          a means of salvation from the looming menace that eventually took
          place (the flood). Unfortunately, not many paid any attention to it.
        </p>

        <p>
          Today, we realize that God is still very much interested in building
          for Himself,a community of people who are like-minded in pursuit of
          Him. Just like the Ark, the local church is God’s salvation plan for
          many in these last days. Beyond the routines/ religion, God wants a
          family of people knitted in love and unity through His Spirit in them.
        </p>

        <p>
          God’s idea of a family is intended to be a safe haven, where we all,
          irrespective of our peculiarities or differences can be vulnerable,
          loving and most importantly, open minded to God. None of us is meant
          to single handedly attain a perfection. The plan is that we will all
          bring our different bits to the table and really begin to live for
          Him.
        </p>

        <p>
          At The Watchtower, God is particular about building a family and this
          , is what we live for! If you ever think of exploring this God’s idea
          of a family, you are right on track and at the right place! It would
          be a pleasure to have you on board, dear one.
        </p>
      </div>

      {/* Our leadership */}
      <section className=" mt-14">
        <h1 className=" font-extrabold text-2xl text-blue-900">LEADERSHIP</h1>

        <div className=" grid grid-cols-1 md:grid-cols-2  mt-20">
          <div className=" text-center flex flex-col justify-center items-center">
            <img className=" lg:w-3/5 w-full" src={PastorT} alt="" />

            <div className=" mt-4">
              <h5 className=" font-bold">PASTOR TAYO J. SOBOWALE</h5>
              <h5>Pastor in Charge</h5>
            </div>
          </div>

          <div className=" flex justify-center px-0 md:px-9 items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui in commodo
              sollicitudin dolor aliquam eget vitae. Vel enim ante ipsum urna
              viverra. Molestie ornare nunc imperdiet tincidunt placerat vitae
              eu auctor. Sed elit sagittis orci suspendisse nisl velit massa
              ipsum, Lorem ipsum dolor sit amet consectetur. Dui in commodo
              sollicitudin dolor aliquam eget vitae. Vel enim ante ipsum urna
              viverra. Molestie ornare nunc imperdiet tincidunt. Show more.
            </p>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2  mt-20">
          <div className=" flex items-center justify-center px-0 md:px-9 items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui in commodo
              sollicitudin dolor aliquam eget vitae. Vel enim ante ipsum urna
              viverra. Molestie ornare nunc imperdiet tincidunt placerat vitae
              eu auctor. Sed elit sagittis orci suspendisse nisl velit massa
              ipsum, Lorem ipsum dolor sit amet consectetur. Dui in commodo
              sollicitudin dolor aliquam eget vitae. Vel enim ante ipsum urna
              viverra. Molestie ornare nunc imperdiet tincidunt. Show more.
            </p>
          </div>
          <div className=" text-center flex flex-col justify-center items-center">
            <img className=" lg:w-3/5 w-full" src={PastorI} alt="" />

            <div className=" mt-4">
              <h5 className=" font-bold">PASTOR IKEOLUWA LAWAL</h5>
              <h5>Asst. Pastor in Charge</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Anthem */}
      <section>
        <h1 className=" font-extrabold text-2xl text-blue-900">
          About Watchtower
        </h1>

        <div className=" grid grid-cols-2 gap-8">
          <div className=" px-5">
            <p>
              We are Watchmen, in the tower, We bear the sword, to engrave the
              world, As we proclaim, Jesus, The Way, Truth and Life, We are
              Watchmen, in the tower.
            </p>
          </div>
          <div className=" px-5">
            <p>
              We are one big family, steadfast in Christ Having our gazed fixed
              on the cross, We have life eternal, Having our gaze fixed, on the
              cross, We have life eternal, Sitted with him, sitted with him, In
              the heaven.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
