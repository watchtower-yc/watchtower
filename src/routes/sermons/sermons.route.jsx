import { Download, Headphones } from "@mui/icons-material";
import Carousel from "nuka-carousel/lib/carousel";
import Footer from "../../components/footer/footer.component";
const Sermons = () => {
  return (
    <div>
      <div className="flex w-full h-full flex-col mb-24 justify-center items-center py-2 container mx-auto px-0 md:px-10">
        <div className="overflow-hidden mt-8">
          <Carousel autoplay={true} autoplayInterval={3}>
            <img
              src={require("../../assets/img/listen1.png")}
              alt="next-event"
              className="mx-auto"
            />
            <img
              src={require("../../assets/img/pursuit1.png")}
              alt="next-event"
              className="mx-auto"
            />
          </Carousel>

          <div className=" flex flex-col w-full mt-24 justify-center items-center">
            <h1 className=" text-3xl font-semibold">RECENT TEACHINGS</h1>
            <div className="border border-gray-400  bg-black w-[250px] mt-5 mx-auto"></div>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" mt-40 grid lg:grid-cols-3  grid-cols-1 gap-8">
              <div className="md:w-[345px] w-[290px] shadow-slate-500 shadow-2xl  ">
                <img src={require("../../assets/img/sermon1.png")} alt="" />

                <h1 className=" px-4 font-bold text-xl md:text-2xl mt-8">
                  THE PURSUIT OF GOD I
                </h1>
                <h4 className=" px-4 md:text-xl text-lg">
                  Pastor Tayo Sobowale
                </h4>
                <p className=" px-4 mt-4 ">
                  If God is omnipresent (everywhere), why pursue HIm? God is
                  indeed expressed through and in everything. However, we could
                  get a clue as to "why we should pursue God" by paying
                  attention to the life of Jacob. Listen to this teachings on
                  the pursuit of God and learn how we can indeed pursue God.
                </p>
                <div className=" px-5 mt-5 flex justify-between">
                  <button
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/18qFVq0w125buWzW1kivp6ehbDXQ-0kAq/view?usp=drivesdk"
                      );
                    }}
                    className=" bg-blue-900 text-white font-bold flex items-center px-2 py-2 justify-center rounded-lg"
                  >
                    <h1>DOWNLOAD</h1> <Download className=" mr-3" />
                  </button>
                  <button className=" bg-blue-900 text-white font-bold flex items-center px-2 py-2 justify-center rounded-lg">
                    LISTEN <Headphones className=" mr-" />
                  </button>
                </div>
                <div className="border border-gray-400  bg-black w-100 mt-5 mx-auto"></div>
                <h1 className="px-4 font-semibold">JAN 9 2023</h1>
              </div>

              <div className="md:w-[345px] w-[290px] shadow-slate-500 shadow-2xl  ">
                <img src={require("../../assets/img/cap.png")} alt="" />
                {/* <div className=" bg-slate-400 w-full h-[229px]"></div> */}

                <h1 className=" px-4 font-bold text-xl md:text-2xl mt-8">
                  CAPSULATED BLESSINGS
                </h1>
                <h4 className=" px-4 text-lg md:text-xl ">
                  Pastor Tayo Sobowale
                </h4>
                <p className=" px-4 mt-4 ">
                  Attracting Gods Blessing is a matter of positioning and
                  otherwise attracting a curse is also a matter of positioning.
                  Learn more about how we can attract Gods Blessing from this
                  teaching
                </p>
                <div className=" px-5 mt-24 flex justify-between">
                  <button
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/18rPlw_eyx1hleb2HZsgGpKff8v7c7yXt/view?usp=drivesdk"
                      );
                    }}
                    className=" bg-blue-900 text-white font-bold flex items-center px-2 py-2 justify-center rounded-lg"
                  >
                    <h1>DOWNLOAD</h1> <Download className=" mr-3" />
                  </button>
                  <button className=" bg-blue-900 text-white font-bold flex items-center px-2 py-2 justify-center rounded-lg">
                    LISTEN <Headphones className=" mr-" />
                  </button>
                </div>

                <div className="border border-gray-400  bg-black w-100 mt-5 mx-auto"></div>
                <h1 className="px-4 font-semibold">JAN 9 2023</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-blue-900 flex flex-col pb-20 text-white items-center w-full h-100">
        <div className=" flex flex-col w-full mt-24 justify-center items-center">
          <h1 className=" text-3xl font-semibold">RECENT TEACHINGS</h1>
          <div className="border border-gray-400  bg-black w-[250px] mt-5 mx-auto"></div>

          <h1 className=" text-2xl mt-8 font-semibold">SAY THESE WORDS:</h1>

          <div className=" w-[300px]  md:w-[700px] mt-5">
            Today I confess Jesus, as my Lord and Saviour. I believe He came to
            the earth, I believe He died, and I believe, that on the 3rd day, He
            was raised from the dead. Everything Jesus did, by His death, burial
            and resurrection, I receive into my human spirit. I receive the gift
            of eternal life. I am Born Again. Thank You Jesus. Hallelujah!
          </div>
        </div>
      </section>
      <section className="mt-24 mb-24 flex flex-col text-blue-900 items-center w-full h-100">
        <form action="" className=" w-full flex justify-center">
          <div className=" flex flex-col w-[80%] mt-4 justify-center items-center">
            <input
              required
              type="text"
              className=" border-[2px] border-blue-900 w-full px-3 py-3 outline-none "
              placeholder="FULL NAME"
            />
            <div className="w-full flex md:flex-row flex-col">
              <input
                required
                className="border-[2px] border-blue-900 w-full px-3 py-3 outline-none"
                type="email"
                placeholder="EMAIL"
                name=""
                id=""
              />
              <input
                required
                className="border-[2px] border-blue-900 w-full px-3 py-3 outline-none"
                type="tel"
                name=""
                id=""
                placeholder="PHONE NUMBER"
              />
              <input
                className="border-[2px] bg-blue-900 text-white font-bold border-blue-900 w-full px-3 py-3 outline-none"
                type="submit"
                value="SUBMIT"
                placeholder="SUBMIT"
              />
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Sermons;
