import AppButton from "../../components/app-button/app-button.component";
import Footer from "../../components/footer/footer.component";
import FormInput from "../../components/form-input/form-input.component";

const Testimonies = () => {
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Firstname Lastname",
      errorMessage: "Your fullname is required",
      label: "Fullname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      errorMessage: "Must be a valid phone number",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "Enter Phone Number",
      errorMessage: "Must be a valid phone number",
      label: "Last Name",
      pattern: "^[0-9]{11-15}$",
      required: true,
    },
  ];
  return (
    <div>
      <section className="container mx-auto mt-4 relative text-white py-20 mb-20">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={require("../../assets/img/banner-img.png")}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
        <p className="text-center italic font-medium text-2xl md:text-4xl">
          Testimony time, Overcomers time!!!
        </p>
      </section>
      <section className="container mx-auto mb-20 px-4">
        <p className="text-md text-center md:text-left italic">
          Testimonies helps us to count our blessings, focus on God’s
          faithfulness, and speak of God’s wounders. When we share them them,
          others are encouraged and strengthened in faith, knowing that God can
          do for all what He did for one.
        </p>
        <div className="mt-20">
          <form action="">
            <div>
            {inputs.map((input) => (
                  <FormInput
                    label={input.label}
                    errMsg={input.errorMessage}
                    name={input.name}
                    // value={inputValue[input.name]}
                    // onChange={handleInput}
                    placeholder={input.placeholder}
                    required
                    pattern={input.pattern}
                    type={input.type}
                  />
                ))}
            </div>
            <div className="mb-4">
              <label htmlFor="">
                What God did <span className="text-red-400">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  type="text"
                  placeholder="Share your testimony"
                  name=""
                  rows={5}
                  className="p-4 w-4/5 border border-gray-400 rounded-md"
                />
                <div>
                  <span></span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">
                I consent that RCCG Watchtower can share my testimony to
                encourage and boost the faith of others.{" "}
                <span className="text-red-400">*</span>
              </label>
              <div>
                <input type="radio" name="consent" value="Yes" /> Yes <br />
                <input type="radio" name="consent" value="No" /> No
              </div>
            </div>
            <div className="mt-4">
              <AppButton children="send" buttonType="primary" />
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

export default Testimonies;
