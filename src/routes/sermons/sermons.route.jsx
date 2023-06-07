import { Download, Headphones } from "@mui/icons-material";
import Carousel from "nuka-carousel/lib/carousel";
import Footer from "../../components/footer/footer.component";
import { useForm } from "react-hook-form";
import addDataToBornAgainCollection from "../../utils/firebase/firebase";
import { useState } from "react";
import emailjs from '@emailjs/browser';
const Sermons = () => {

  emailjs.init('UiJDlTjBRttlBtkdp')

  const { register, handleSubmit, resetField } = useForm();

  const [bornAgain, setBornAgain] = useState(false);

  const onSubmitAction = async (data) => {

    const { name ,email } = data;
    console.log("___FORM_DATA___,", data);


    try {
      await addDataToBornAgainCollection(data);

      console.log("succesfully added");

      setBornAgain(true)



      resetField('name')
      resetField('email')
      resetField('phoneno')

      const sendConfirmationEmail = () => {
        const templateParams = {
          email: email,
          name: name
        };

        emailjs
          .send("service_pfkminr", "template_8ih6cca", templateParams)
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

      sendConfirmationEmail();

    } catch (error) {
      console.log(error, "Unable to add to collection");
    }

  };


  return (
    <div>
      <div className="flex font-serrat w-full h-full flex-col mb-24 justify-center items-center py-2 container mx-auto px-0 md:px-10">
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
            <h1 className=" text-3xl font-semibold text-blue-900">
              RECENT TEACHINGS
            </h1>
            <div className="border border-gray-400  bg-black w-[250px] mt-5 mx-auto"></div>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" mt-24 grid lg:grid-cols-3  grid-cols-1 gap-8">
              <div className="bg-white max-w-sm  rounded-lg shadow dark:bg-gray-100 ">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={require("../../assets/img/cap.png")}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-blue-900">
                      CAPSULATED BLESSINGS
                    </h5>
                    <h4 className="text-sm text-red-500 md:text-base ">
                      Pastor Tayo Sobowale
                    </h4>
                  </a>

                  <p className="mb-3 mt-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                    Attracting Gods Blessing is a matter of positioning and
                    otherwise attracting a curse is also a matter of
                    positioning. Learn more about how we can attract Gods
                    Blessing from this teaching
                  </p>
                  <div className="flex justify-between mt-8">
                    <button
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/18rPlw_eyx1hleb2HZsgGpKff8v7c7yXt/view?usp=sharing"
                        );
                      }}
                      className=" bg-blue-900 px-3 text-white text-[10px] font-bold flex items-center justify-center rounded-lg"
                    >
                      <h1>DOWNLOAD</h1>{" "}
                      <Download className=" w-[10px] h-[10px]" />
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/18rPlw_eyx1hleb2HZsgGpKff8v7c7yXt/view?usp=sharing"
                        );
                      }}
                      className=" bg-blue-900 text-white text-[10px] font-bold flex items-center px-2 py-2 justify-center rounded-lg"
                    >
                      LISTEN <Headphones className="  w-[10px] h-[10px] mr-" />
                    </button>
                  </div>

                  <h1 className=" text-[10px] mt-5 text-gray-400 font-semibold">
                    JAN 9 2023
                  </h1>
                </div>
              </div>

              <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-100 ">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={require("../../assets/img/sermon1.png")}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-blue-900">
                      THE PURSUIT OF GOD I
                    </h5>
                    <h4 className="text-sm text-red-600 md:text-base ">
                      Pastor Tayo Sobowale
                    </h4>
                  </a>

                  <p className="mb-3 mt-3 font-normal text-xs text-gray-700 dark:text-gray-400">
                    If God is omnipresent (everywhere), why pursue HIm? God is
                    indeed expressed through and in everything. However, we
                    could get a clue as to "why we should pursue God" by paying
                    attention to the life of Jacob. Listen to this teachings on
                    the pursuit of God and learn how we can indeed pursue God.
                  </p>

                  <div className=" bottom-0 flex justify-between mt-8">
                    <button
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/18qFVq0w125buWzW1kivp6ehbDXQ-0kAq/view?usp=sharing"
                        );
                      }}
                      className=" bg-blue-900 px-3 text-white text-[10px] font-bold flex items-center justify-center rounded-lg"
                    >
                      <h1>DOWNLOAD</h1>{" "}
                      <Download className=" w-[10px] h-[10px]" />
                    </button>
                    <button
                      onClick={() => {
                        window.open(
                          "https://drive.google.com/file/d/18qFVq0w125buWzW1kivp6ehbDXQ-0kAq/view?usp=sharing"
                        );
                      }}
                      className=" bg-blue-900 text-white text-[10px] font-bold flex items-center px-2 py-2 justify-center rounded-lg"
                    >
                      LISTEN <Headphones className="  w-[10px] h-[10px] mr-" />
                    </button>
                  </div>

                  <h1 className=" text-[10px] mt-5 text-gray-400 font-semibold">
                    JAN 9 2023
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" font-serrat bg-blue-900 flex flex-col pb-20 text-white items-center w-full h-100">
        <div className=" flex flex-col w-full mt-24 justify-center items-center">
          <h1 className=" text-2xl font-semibold">NOT BORN AGAIN ?</h1>
          <div className="border border-gray-400  bg-black w-[250px] mt-2 mx-auto"></div>

          <h1 className=" text-xl mt-8 font-semibold">SAY THESE WORDS:</h1>

          <div className=" w-[300px]  md:w-[700px] mt-5">
            Today I confess Jesus, as my Lord and Saviour. I believe He came to
            the earth, I believe He died, and I believe, that on the 3rd day, He
            was raised from the dead. Everything Jesus did, by His death, burial
            and resurrection, I receive into my human spirit. I receive the gift
            of eternal life. I am Born Again. Thank You Jesus. Hallelujah!
          </div>
        </div>
      </section>
      <section className="mt-24 font-serrat mb-24 flex flex-col text-blue-900 items-center w-full h-100">
        <form onSubmit={handleSubmit(onSubmitAction)} action="" className=" w-full flex justify-center">
          <div className=" flex flex-col w-[80%] mt-4 justify-center items-center">
            <input
              required
              type="text"
              {...register('name')}
              className=" border-[2px] border-blue-900 w-full px-3 py-3 outline-none "
              placeholder="FULL NAME"
            />
            <div className="w-full flex md:flex-row flex-col">
              <input
                required
                className="border-[2px] border-blue-900 w-full px-3 py-3 outline-none"
                type="email"
                {...register('email')}
                placeholder="EMAIL"
                            />
              <input
                required
                className="border-[2px] border-blue-900 w-full px-3 py-3 outline-none"
                type="tel"
                {...register('phoneno')}
            
                placeholder="PHONE NUMBER"
              />
              <input
                className="border-[2px] bg-blue-900 text-white font-bold border-blue-900 w-full px-3 py-3 outline-none"
                type="submit"
                value={ bornAgain ? "THANKS FOR SUBMITING !" : "SUBMIT"}
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
