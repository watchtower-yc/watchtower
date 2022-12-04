// import bannerImg from "../../assets/img/banner-img.png";
import AppButton from "../../components/app-button/app-button.component";
import Footer from "../../components/footer/footer.component";
import CountdownList from '../../components/countdown-list/countdown-list.component'

const Home = () => {
  return (
    <div>
      <div className="banner relative text-white py-48 mb-20">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={require("../../assets/img/banner-img.png")}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10 header"></div>
        <p className="text-center mont text-4xl md:text-8xl">
          YOU'RE <span className="paris">invited</span>
        </p>
        <p className="text-center mont">to our weekely service.</p>
      </div>
      <section className="container mx-auto mb-20 px-4">
        <div className="grid md:grid-cols-2">
          <div className="self-center">
            <p className="font-bold text-2xl uppercase text-center">
              Welcome to the watchtower!!!
            </p>
            <div className="border border-gray-400 mt-1 bg-black w-40 mx-auto"></div>
            <div className="mt-8">
              <p className="mb-4">
                God has given us a mandate to raise role models, and He has
                indeed been faithful, backing our dedication and hard work with
                a great harvest of transformed lives.
              </p>
              <p className="mb-4">
                It is top priority for us that you partake of wholesome worship,
                edifying messages to build you up and positive interactions.
              </p>
              <p className="mb-4">
                Watchtower is a place where you belong, where people are real
                and they really care for you. At watchtower we love people and
                we love Jesus.
              </p>
              <p className="mb-4">
                No matter what you like, where you’re from or where you’ve been
                WatchTower is a place where you are loved. Come experience God
                this week.
              </p>
            </div>
          </div>
          <div className="p-8 self-center">
            <img src={require("../../assets/img/welcome.png")} alt="welcome" />
          </div>
        </div>
      </section>
      <section className="container mx-auto mb-20">
        <p className="font-bold text-2xl uppercase text-center">
          gathering time
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <p className="font-medium text-md uppercase mb-4">
              mid-week service
            </p>
            <p className="text-sm font-light">Wednesday: Word Communion - </p>
            <p className="text-sm font-light">5:00 pm</p>
          </div>
          <div className="text-center md:text-left">
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
          {/* <CountdownList /> */}
        </div>
        <div className="flex justify-center align-center">
          <AppButton children="more details" buttonType="primary" />
        </div>
      </section>
      <section className="container mx-auto mb-20 px-4">
        <p className="font-bold text-2xl uppercase text-center">plan a visit</p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="self-center">
            <img
              src={require("../../assets/img/visit.png")}
              alt="next-event"
              className="mx-auto"
            />
          </div>
          <div className="self-center">
            <p className="mb-4">
              There is no better experience the Watchtower than in-person!
            </p>
            <p className="mb-4">
              The family gathers each Sunday morning at 7:30am abd 10:00am. Join
              us this weekend for worship and teaching.
            </p>
            <p className="mb-4">We look forward to seeing you soon!</p>
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
