// import bannerImg from "../../assets/img/banner-img.png";
import AppButton from "../../components/app-button/app-button.component";
import Footer from "../../components/footer/footer.component";
import CountdownList from "../../components/countdown-list/countdown-list.component";
import { Flip, Zoom } from "react-reveal";

const Home = () => {
  return (
    <div>
      <div className="banner relative flex flex-col justify-center items-center text-white py-48 mb-20">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={require("../images/4.jpg")}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10 header"></div>
        <Flip>
          <p className="text-center mont text-4xl md:text-7xl">
            YOU'RE WELCOME TO THE TOWER
          </p>
          <p className="text-center mont">to our weekely service.</p>
        </Flip>

        <button className=" px-5 py-3 mt-3 rounded-lg bg-blue-900 text-white font-extrabold">
          READ MORE
        </button>
      </div>
      <section className="container mx-auto mb-20 px-4">
        <Zoom>
          <div className="grid md:grid-cols-2">
            <div className="self-center">
              <p className="font-bold text-2xl uppercase text-center">
                Welcome to the watchtower!!!
              </p>
              <div className="border border-gray-400 mt-1 bg-black w-40 mx-auto"></div>
              <div className="mt-8">
                <p className="mb-4">
                  Christ's instruction to us is crystal clear; to raise
                  dependable youths and build a family for Him!
                </p>
                <p className="mb-4">
                  We have pursued this vision relentlessly over the years and
                  Jesus has rewarded our labor of love with an harvest of
                  transformed lives.
                </p>
                <p className="mb-4">
                  If what your soul yearns for is genuine love and acceptance,
                  Jesus has kept a family for you! We are immensely loved by
                  Abba and He teaches us to be an extension of it to everyone we
                  meet.
                </p>
                <p className="mb-4">
                  No matter who you are and what you've been through, we want
                  you to know that Christ, out of His sheer love has made
                  provisions for you already.
                </p>
                <p className="mb-4">
                  Come, come home to Jesus, welcome to His family, welcome to
                  Watchtower!
                </p>
              </div>
            </div>
            <div className="p-8 self-center">
              <img
                src={require("../../assets/img/welcome.png")}
                alt="welcome"
              />
            </div>
          </div>
        </Zoom>
      </section>
      <section className="container  mx-auto mb-20">
        <p className="font-bold text-2xl uppercase text-center">
          Gathering time
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <Zoom>
            <div className="text-center bg-white flex flex-col justify-center items-center h-60 shadow-2xl">
              <p className="font-medium text-md uppercase mb-4">
                mid-week service
              </p>
              <p className="text-sm font-light">Wednesday: Word Communion - </p>
              <p className="text-sm font-light">5:00 pm</p>
            </div>
          </Zoom>
          <Zoom>
            <div className="text-center  bg-white flex flex-col justify-center items-center h-60 shadow-2xl md:text-left">
              <p className="font-medium text-md uppercase mb-4">
                mid-week service
              </p>
              <p className="text-sm font-light mb-2">
                First Service: 7: 30am - 9: 15am
              </p>
              <p className="text-sm font-light mb-2">
                Sunday School: 9:15am - 9:55am
              </p>
              <p className="text-sm font-light mb-2">
                Second Service: 9:55am - 11:00am
              </p>
            </div>
          </Zoom>
        </div>
      </section>
      <section className="mb-20 px-4">
        <p className="font-bold text-2xl uppercase text-center">
          upcoming event
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="overflow-hidden mt-8">
          <img
            src={require("../../assets/img/carol-banner.png")}
            alt="next-event"
            className="mx-auto"
          />
        </div>
        <div className="container mx-auto mb-12">
          <CountdownList />
        </div>
        <div className="flex justify-center align-center">
          <AppButton children="more details" buttonType="primary" />
        </div>
      </section>
      {/* Prayer */}
      <section className=" flex flex-col justify-center items-center mb-20 py-10 px-20 text-center bg-purple-200">
        <p className=" font-extrabold text-2xl">NEED A PRAYER</p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>

        <p className=" mt-5">
          Sometimes life becomes too much to handle, leaving us with nothing but
          questions. Hope may seem far away in those circumstances. Our attitude
          toward the One who is waiting to hear us changes as a result of
          prayer, which is a wonderful thing. Whatever you’re dealing with, we
          would love to pray for you!
        </p>

        <button className=" bg-black flex items-center mt-8 text-white px-8 py-3">
          ASK FOR A PRAYER
          <img className=" ml-2" src={require("../images/Vector.png")} alt="" />
        </button>
      </section>
      <section className="container  mx-auto mb-20 px-4">
        <p className="font-bold text-2xl uppercase text-center">plan a visit</p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="self-center">
            <Zoom>
              <img
                src={require("../../assets/img/visit.png")}
                alt="next-event"
                className="mx-auto"
              />
            </Zoom>
          </div>
          <div className="self-center">
            <Zoom>
              <p className="mb-4">
                There is no better experience the Watchtower than in-person!
              </p>
              <p className="mb-4">
                The family gathers each Sunday morning at 7:30am abd 10:00am.
                Join us this weekend for worship and teaching.
              </p>
              <p className="mb-4">We look forward to seeing you soon!</p>
            </Zoom>
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-20 px-4">
        <p className="font-bold text-2xl uppercase text-center">
          subscribe to our newsletter
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8">
          <form action="">
            <input
              type="email"
              placeholder="Your email:"
              className="h-12 w-full px-4 rounded-md shadow-lg shadow-blue-700/50"
            />
            <div className="flex justify-center align-center mt-8">
              <AppButton children="subscribe" buttonType="primary" />
            </div>
          </form>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
