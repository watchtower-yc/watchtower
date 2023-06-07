// import bannerImg from "../../assets/img/banner-img.png";
import AppButton from "../../components/app-button/app-button.component";
import Footer from "../../components/footer/footer.component";
// import CountdownList from "../../components/countdown-list/countdown-list.component";
import { Flip, Zoom } from "react-reveal";
import Carousel from "nuka-carousel/lib/carousel";
import { Download } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addSubscriber } from "../../utils/firebase/firebase";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  let navigate = useNavigate();

  const [subscribed, setSubscribed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [modal, setModal] = useState(false)

  const { register, handleSubmit, resetField } = useForm();

  emailjs.init("UiJDlTjBRttlBtkdp");

  const onPrayerSubmitAction = async (data) => {
    const { prayer } = data;
    console.log("___FORM_DATA___,", prayer);

    resetField('prayer');

    setSubmitted(true);
      
  };

  const onSubmitAction = async (data) => {
    const { email } = data;
    console.log("___FORM_DATA___,", email);

    try {
      await addSubscriber(email);

      setSubscribed(true);

      const sendPaymentConfirmationEmail = () => {
        const templateParams = {
          email: email,
        };

        emailjs
          .send("service_pfkminr", "template_3d8tbct", templateParams)
          .then((response) => {
            console.log(
              "Subscription confirmation email sent to the user:",
              response.status,
              response.text
            );
          })
          .catch((error) => {
            console.error(
              "Error sending subscription confirmation email to the customer:",
              error
            );
          });
      };

      sendPaymentConfirmationEmail();
      resetField("email");
    } catch (error) {
      console.log(error, "didnt upload");
    }
  };
  return (
    <div>
      <div className="banner relative font-serrat flex flex-col justify-center items-center text-white py-48 mb-20">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={require("../images/4.jpg")}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10 header"></div>
        <Flip>
          <p className="text-center font-serrat text-4xl md:text-7xl">
            YOU'RE WELCOME TO THE TOWER
          </p>
          <p className="text-center mont">to our weekely service.</p>
        </Flip>

        <button className=" px-5 py-3 font-serrat mt-3 rounded-lg bg-blue-900 text-white font-extrabold">
          READ MORE
        </button>
      </div>
      <section className="container mx-auto mb-20 px-4">
        <Zoom>
          <div className="grid md:grid-cols-2">
            <div className="self-center font-serrat">
              <p className="font-bold text-2xl uppercase text-center">
                Welcome to the watchtower!!!
              </p>
              <div className="border border-gray-400 mt-1 bg-black w-40 mx-auto"></div>
              <div className="mt-8 font-serrat">
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
      <section className="container font-serrat  mx-auto mb-20">
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
      <section className="mb-20 font-serrat px-4">
        <p className="font-bold text-2xl uppercase text-center">
          upcoming event january 2023
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
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
        </div>
        {/* <div className="container mx-auto mb-12">
          <CountdownList />
        </div> */}
        <div className="flex font-serrat mt-7 justify-center align-center">
          <AppButton
            children={
              <div onClick={() => navigate("/sermons")} className=" flex gap-2">
                <h1>DOWNLOAD THE TEACHINGS</h1>
                <Download />
              </div>
            }
            buttonType="primary"
          />
        </div>
      </section>
      {/* Prayer */}
      <section className=" flex flex-col font-serrat justify-center items-center mb-20 py-10 px-20 text-center bg-purple-200">
        <p className=" font-extrabold text-2xl">NEED A PRAYER</p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>

        <p className=" mt-5">
          Sometimes life becomes too much to handle, leaving us with nothing but
          questions. Hope may seem far away in those circumstances. Our attitude
          toward the One who is waiting to hear us changes as a result of
          prayer, which is a wonderful thing. Whatever you’re dealing with, we
          would love to pray for you!
        </p>

        <button onClick={() => setModal(true)} className=" bg-black flex items-center mt-8 text-white px-8 py-3">
          ASK FOR A PRAYER
          <img className=" ml-2" src={require("../images/Vector.png")} alt="" />
        </button>
      </section>
      <section className="container font-serrat  mx-auto mb-20 px-4">
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
      <section className="container font-serrat mx-auto mb-20 px-4">
        <p className="font-bold text-2xl uppercase text-center">
          subscribe to our newsletter
        </p>
        <div className="border border-gray-400 mt-1 bg-black w-20 mx-auto"></div>
        <div className="mt-8">
          <form onSubmit={handleSubmit(onSubmitAction)}>
            <input
              type="email"
              {...register("email")}
              placeholder="Your email:"
              className="h-12 w-full px-4 rounded-md shadow-lg shadow-blue-700/50"
            />
            <div className="flex justify-center align-center mt-8">
              <AppButton
                children={subscribed ? "Thanks for Subscribing !" : "subscribe"}
                buttonType="primary"
              />
            </div>
          </form>
        </div>
      </section>
      <section>
        <Footer />
      </section>

      
      { modal &&       <div
        id="prayer-modal"
        tabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-purple-400">
            <button
              type="button"
              onClick={() => setModal(!modal)}
              className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="prayer-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-white">
                Submit your prayer points
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit(onPrayerSubmitAction)}>
                <div>
                  <textarea
                    id="prayer-points"
                    name="prayer-points"
                    {...register('prayer')}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                    rows="5"
                    placeholder="Enter your prayer points..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
                >
                  { submitted ? "THANKS FOR SUBMITTING" : "SUBMIT"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> }

    </div>
  );
};

export default Home;
